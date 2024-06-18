<script lang="ts">
	import type { Credentials } from '$lib/interface';
	import InputText from '$lib/components/shared/formInput/InputText.svelte';
	import InputPassword from '$lib/components/shared/formInput/InputPassword.svelte';
	import Button from '$lib/components/shared/button/Button.svelte';
	import Link from '$lib/components/shared/links/Link.svelte';
	import { focusOnFirstError } from '$lib/helpers/focusOnFirstError';
	import { loginSession } from '../../lib/stores/index';
	import { onMount } from 'svelte';
	import { createForm } from 'svelte-form-helper';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const form = createForm();
	const emailInput = form.field({ onDirty: true });
	const passwordInput = form.field({ onDirty: true });

	let message: string;
	const credentials: Credentials = {
		email: '',
		password: ''
	};
	async function login() {
		message = '';
		const form = <HTMLFormElement>document.getElementById('signIn');
		if (form.checkValidity()) {
			try {
				await loginLocal(credentials);
			} catch (error) {
				if (error instanceof Error) message = error.message;
			}
		} else {
			form.classList.add('was-validated');
			focusOnFirstError(form);
			return;
		}
	}

	onMount(() => {});
	async function loginLocal(credentials: Credentials) {
		try {
			const res = await fetch('auth/login', {
				method: 'POST',
				body: JSON.stringify(credentials),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const fromEndpoint = await res.json();
			if (res.ok) {
				loginSession.set(fromEndpoint.user);
				const { role } = fromEndpoint.user;
				const referrer = $page.url.searchParams.get('referrer');
				if (referrer) goto(referrer);
				switch (role) {
					case 'admin':
						goto('/admin');
						break;
					case 'manager':
						goto('/manager');
						break;
					default:
						goto('/');
				}
			} else {
				throw new Error(fromEndpoint.message);
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error('Login error', error);
			}
		}
	}
</script>

<svelte:head>
	<title>Login Form</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="flex justify-center my-3 max-w-full">
	<form
		id="signIn"
		autocomplete="on"
		novalidate
		class="mt-3 grid gap-5 w-[28rem] py-4"
		use:form
		on:submit={login}
	>
		<div class="">
			<h4 class="font-bold text-4xl mb-1 text-center">Welcome Back</h4>
			<p class="text-center font-normal text-xl">Welcome to our community</p>
		</div>
		<div class="justify-self-center w-fit">
			<Button type="button" variant="outline" title="Google Login Auth" id="googleButton">
				<!-- <img src={googleIcon} alt="googleIcon" /> -->
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
				bind:value={credentials.email}
				id={$emailInput.id}
				field={emailInput}
				required
				pattern={'^[w-.]+@([w-]+.)+[w-]{2,4}$'}
				placeholder="Enter your email"
				invalidText={$emailInput.valueMissing
					? 'Email is required'
					: $emailInput.typeMismatch
						? 'Email not available'
						: $emailInput.patternMismatch
							? 'Email error syntax'
							: ''}
				showMessage={!$emailInput.show}
			/>
		</div>
		<div class="">
			<InputPassword
				field={passwordInput}
				bind:value={credentials.password}
				min={8}
				max={30}
				id="password"
				required
				placeholder="Enter your password"
				invalidText={$passwordInput.valueMissing
					? 'Password is required'
					: $passwordInput.tooShort
						? 'Password must has 8 character'
						: $passwordInput.patternMismatch
							? 'Must contain at least one uppercase, lowercase, and number'
							: ''}
				showMessage={!$passwordInput.show}
			/>
			<div></div>
		</div>
		<div class="w-full flex justify-between">
			<div class="flex gap-2 items-center">
				<input type="checkbox" name="remember" id="remember" />
				<p>Remember me</p>
			</div>
			<div class="">
				<Link href="/forget" underline typeText>Recover Password</Link>
			</div>
		</div>
		{#if message}
			<p class="text-danger">{message}</p>
		{/if}
		<Button
			type="submit"
			variant="outline"
			title="Login Button"
			size="lg"
			disable={!$form.valid}
			classStyled=" w-full uppercase border-2 border-gray-500 group-invalid:pointer-events-none group-invalid:opacity-30"
			>log in</Button
		>
	</form>
</div>
