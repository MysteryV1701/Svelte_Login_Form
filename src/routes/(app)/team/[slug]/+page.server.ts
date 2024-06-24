import { db } from '$lib/server/db';
import { sendMail } from '$lib/services/email-services.js';
import { fail, redirect } from '@sveltejs/kit';
import { randomBytes } from 'node:crypto';
// import { writeFile } from 'node:fs/promises';
// import { extname } from 'node:path';
// import path from 'path';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';
export const load = async ({ params }) => {
	const team = await db.team.findUnique({
		where: {
			slug: params.slug
		}
	});
	if (!team) {
		throw redirect(302, '/');
	}
	return {
		team,
		steamed: {
			teamRoles: db.userTeamRole.findMany({
				where: {
					team: {
						slug: params.slug
					}
				},
				include: {
					user: true
				}
			}),
			invite: db.invite.findMany({
				where: {
					team: {
						slug: params.slug
					}
				}
			}),
			files: db.file.findMany({
				where: {
					team: {
						slug: params.slug
					}
				}
			})
		}
	};
};

export const actions = {
	deleteTeam: async ({ params, locals }) => {
		const session = await locals.auth.validate();
		const userTeamRole = await db.userTeamRole.findFirst({
			where: {
				user_id: session?.user.userId,
				team: { slug: params.slug }
			}
		});
		if (!userTeamRole || userTeamRole.role !== 'ADMIN') {
			return fail(401, {
				message: 'You ara not authorized to delete this team'
			});
		}

		await db.team.delete({
			where: {
				slug: params.slug
			}
		});
	},
	inviteUser: async ({ locals, request, params, url }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');
		const formData = await request.formData();
		const email = formData.get('email-invite');
		const token = randomBytes(10).toString('hex');
		const team = await db.team.findUnique({
			where: {
				slug: params.slug
			}
		});
		if (!team) {
			return fail(400, { message: 'Team not found' });
		}
		await db.invite.create({
			data: {
				inviter_id: session.user.userId,
				email: email!.toString(),
				team_id: team?.id,
				token,
				expires_at: new Date(Date.now())
			}
		});

		sendMail({
			to: String(email),
			subject: `You've been invited to ${team.name} team`,
			html: `<html><body><p>Click <a href="${url.origin}/accept-invite/${token}">here</a> to accept your invite.</p></body></html>`
		});
		return {
			success: true
		};
	},
	uploadFile: async ({ request, params, locals }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');
		const formData = await request.formData();
		const file = formData.get('upload_file') as File;
		if (!file) {
			return fail(400, { message: 'No file to upload' });
		}
		// const dirPath = path.join(process.cwd(), 'src/routes/(app)/file/stored/');
		// const slug = `${crypto.randomUUID()}${extname(file.name)}`;
		const team = await db.team.findUnique({
			where: {
				slug: params.slug
			}
		});
		if (!team) {
			return fail(400, { message: 'Team not found' });
		}
		const { url } = await put(file.name, file, {
			access: 'public',
			token: BLOB_READ_WRITE_TOKEN,
			multipart: true
		});
		// await writeFile(`${dirPath}${slug}`, Buffer.from(await file?.arrayBuffer()));
		await db.file.create({
			data: {
				user_id: session.user.userId,
				team_id: team?.id,
				name: file.name,
				slug: url
			}
		});
	}
};
