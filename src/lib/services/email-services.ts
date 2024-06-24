// import { dev } from '$app/environment';
import { SMTP_FROM, EMAIL_API_TOKEN } from '$env/static/private';
import { Resend } from 'resend';
const emailClient = new Resend(EMAIL_API_TOKEN);

export const sendMail = async ({
	to,
	subject,
	html
}: {
	to: string;
	subject: string;
	html: string;
}) => {
	// if (dev) return;
	const options = {
		from: SMTP_FROM,
		to: to,
		subject: subject,
		html
	};
	return emailClient.emails.send(options).catch((err) => {
		console.error(err);
	});
};
