<script lang="ts">
	import { enhance } from '$app/forms';
	import Panel from '$lib/components/Panel/Panel.svelte';
	import Button from '$lib/components/shared/button/Button.svelte';
	import Loader from '$lib/components/shared/loader/Loader.svelte';
	import { Trash, FileDown } from 'lucide-svelte';
	import type { ActionData, PageData } from './$types';
	import TextFiled from '$lib/components/shared/textFiled/TextFiled.svelte';
	import Links from '$lib/components/shared/links/Link.svelte';
	import Alert from '$lib/components/shared/alert/Alert.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { createToast } from '$lib/components/shared/toast/Toast.svelte';
	import { goto } from '$app/navigation';
	import FileField from '$lib/components/shared/textFiled/FileField.svelte';
	export let data: PageData;

	export let form: ActionData;
	const deleteTeam: SubmitFunction = () => {
		return async ({ result }) => {
			if (result.type === 'success') {
				createToast({
					title: 'Team delete',
					description: 'Your team has been delete',
					type: 'success'
				});
				goto('/');
			}
		};
	};
	const inviteUser: SubmitFunction = () => {
		return async ({ result }) => {
			if (result.type === 'success') {
				createToast({
					title: 'Invite send',
					description: 'Your invite has been sent',
					type: 'success'
				});
			}
		};
	};
</script>

{#if form?.message}
	<Alert title="An error occurred">
		<p>{form?.message}</p>
	</Alert>
{/if}
<Panel title="Members">
	<div class="flex justify-between">
		<Loader promise={data.steamed.teamRoles} let:value>
			{#each value as member}
				<div class="member">
					{member.user.email} - {member.role}
					{#if member.user.id !== data.user.userId && value.find((m) => m.user_id === data.user.userId)?.role === 'ADMIN'}
						<form method="post" use:enhance>
							<input type="text" hidden name="userId" value={member.user.id} />
							<Button
								type="submit"
								variant="outline"
								formAction="?/deleteUser"
								title="Delete User's Team"><Trash size={14} /></Button
							>
						</form>
					{/if}
				</div>
			{/each}
		</Loader>

		<Loader promise={data.steamed.teamRoles} let:value showLoader={false}>
			{#if value.find((m) => m.user_id === data.user.userId)?.role === 'ADMIN'}
				<form method="POST" use:enhance={deleteTeam}>
					<Button type="submit" formAction="?/deleteTeam" variant="outline" title="Delete Team">
						Delete Team
					</Button>
				</form>
			{/if}
		</Loader>
	</div>
</Panel>
<div class="grid grid-cols-2 gap-4">
	<div class="">
		<Panel title="Files">
			<Loader promise={data.steamed.files} let:value>
				<div class="grid gap-4">
					{#each value as file}
						<div class="flex justify-between">
							<div class="">
								{file.name} - {data.user.userId === file.user_id ? data.user.email : ''}
							</div>
							<a href={file.slug} target="_blank"><FileDown size={24} /></a>
						</div>
					{/each}
				</div>
			</Loader>
		</Panel>
		<Panel title="Upload File">
			<form
				action="?/uploadFile"
				method="post"
				use:enhance
				class="flow"
				enctype="multipart/form-data"
			>
				<FileField name="upload_file" required placeholder="Upload your file" />
				<Button type="submit" variant="outline" title="Upload File Button">Upload File</Button>
			</form>
		</Panel>
	</div>
	<div class="w-full">
		<Panel title="Invited">
			<Loader promise={data.steamed.invite} let:value>
				{#each value as invite}
					<div class="">
						{invite.email} - {invite.role}
					</div>
				{/each}
			</Loader>
		</Panel>
		<Panel title="Invite a member">
			<form action="?/inviteUser" method="get" class="flow" use:enhance={inviteUser}>
				<TextFiled
					type="email"
					name="email-invite"
					required
					placeholder="Enter your member's email"
				/>
				<Button type="submit" variant="outline" title="Invite Button">Invite</Button>
			</form>
		</Panel>
	</div>

	<Links href="/team" fontBold>Return to Team Page</Links>
</div>
