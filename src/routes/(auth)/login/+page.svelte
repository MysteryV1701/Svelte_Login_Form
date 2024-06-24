<script lang="ts">
	import Button from '$lib/components/shared/button/Button.svelte';
	import InputText from '$lib/components/shared/textFiled/TextFiled.svelte';
	import Link from '$lib/components/shared/links/Link.svelte';
	import Alert from '$lib/components/shared/alert/Alert.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<svelte:head>
	{#if form?.errors}
		<title>Error trying to login</title>
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		<title>Login - Svelte Auth</title>
	{/if}
</svelte:head>

<main class="flow">
	{#if form?.errors || form?.message}
		<Alert title="An error occurred while trying to log you in">
			{#if form?.message}
				<p>{form?.message}</p>
			{/if}
			{#each Object.values(form?.errors || []) as error}
				<ul>
					<li><a href={`#${error.field}`}>{error.message}</a></li>
				</ul>
			{/each}
		</Alert>
	{/if}
	<div class="flex justify-center my-3 max-w-full">
		<form
			id="signIn"
			method="POST"
			action="?/loginUser"
			autocomplete="on"
			novalidate
			class="mt-3 grid gap-5 w-[28rem] py-4"
		>
			<div class="">
				<h4 class="font-bold text-4xl mb-1 text-center">Welcome Back</h4>
				<p class="text-center font-normal text-xl">Welcome to our community</p>
			</div>
			<div class="justify-self-center w-fit">
				<Button type="button" variant="outline" title="Google Login Auth" id="googleButton">
					Google</Button
				>
			</div>
			<div
				class="relative z-10 text-center after:absolute after:top-3 after:left-0 after:w-full after:border after:border-gray-300 after:-z-10 w-full"
			>
				<span class="uppercase text-sm px-3 bg-gray-100">or</span>
			</div>
			<div class="">
				<InputText
					type="email"
					name="email"
					required
					pattern={'^[w-.]+@([w-]+.)+[w-]{2,4}$'}
					placeholder="Enter your email"
				/>
			</div>
			<div class="">
				<InputText type="password" name="password" required placeholder="Enter your password" />
				<div></div>
			</div>
			<div class="w-full flex justify-between">
				<div class="flex gap-2 items-center">
					<input type="checkbox" name="remember" id="remember" />
					<p>Remember me</p>
				</div>
				<div class="">
					<Link href="/password-reset" underline typeText>Recover Password</Link>
				</div>
			</div>
			<Button
				type="submit"
				variant="outline"
				title="Login Button"
				size="lg"
				classStyled=" w-full uppercase border-2 border-gray-500 group-invalid:pointer-events-none group-invalid:opacity-30"
				>login</Button
			>
		</form>
	</div>
</main>
