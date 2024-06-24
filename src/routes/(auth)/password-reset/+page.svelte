<script lang="ts">
	import { enhance } from '$app/forms';
	import Panel from '$lib/components/Panel/Panel.svelte';
	import Button from '$lib/components/shared/button/Button.svelte';
	import InputText from '$lib/components/shared/textFiled/TextFiled.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<Panel title={form?.success ? 'Check your email' : 'Forgot your password'}>
	{#if form?.success}
		<p>Check your e-mail to receive a link to reset your password</p>
	{:else}
		<p>No problem. Let him cook</p>
	{/if}

	<form method="POST" class="flow" use:enhance>
		<InputText
			type="email"
			name="email"
			required
			pattern={'^[w-.]+@([w-]+.)+[w-]{2,4}$'}
			placeholder="Enter your email"
		/>

		<Button type="submit" variant="outline" title="Request password reset"
			>Request password resets</Button
		>
	</form>
</Panel>
