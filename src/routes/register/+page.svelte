<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { goto } from '$app/navigation';
	import type { UserInterface } from '$lib/interface';
	import InputText from '$lib/components/shared/formInput/InputText.svelte';
	import InputPassword from '$lib/components/shared/formInput/InputPassword.svelte';
	import Button from '$lib/components/shared/button/Button.svelte';
	import Panel from '$lib/components/Panel/Panel.svelte';
	import { loginSession } from '../../lib/stores/index';
	import { onMount } from 'svelte';
	import { createForm } from 'svelte-form-helper';

	const form = createForm();
	const emailInput = form.field({ onDirty: true });
	const nameInput = form.field({ onDirty: true });
	const passwordInput = form.field({ onDirty: true });
	const confirmPasswordInput = form.field({ onDirty: true });
	let confirmPasswordValue = '';
	let message: string;

	const limit = new Date();
	console.log(limit);
	limit.setSeconds(limit.getSeconds() - 600);
	console.log(limit);
	let user: UserInterface = {
		id: 0,
		role: 'customer',
		name: '',
		email: '',
		password: '',
		phone: ''
	};

	async function register() {
		// const form = <HTMLFormElement>document.getElementById('register');
		// console.log('User hello', form.checkValidity());
		message = '';
		if (!passwordMatch()) {
			console.log('Does not match');
			return;
		}
		try {
			await registerLocal(user);
		} catch (error) {
			if (error instanceof Error) {
				message = error.message;
				console.log('Login error', message);
			}
		}
	}
	onMount(() => {
		document.onfocus = (event): void => {
			if (event.target instanceof HTMLInputElement) event.target.select();
		};
	});
	async function registerLocal(user: UserInterface) {
		try {
			const res = await fetch('/auth/register', {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (!res.ok) {
				if (res.status == 404) {
					throw new Error('Sorry, that username is already in use');
				}
				throw new Error(res.statusText);
			}
			const fromEndpoint = await res.json();
			loginSession.set(fromEndpoint.user);
			goto('/');
		} catch (err) {
			console.log('Register error', err);
			if (err instanceof Error) {
				throw new Error(err.message);
			}
		}
	}
	const passwordMatch = () => {
		if (!user) return false;
		if (!user.password) user.password = '';
		return user.password == confirmPasswordValue;
	};
</script>

<svelte:head><title>Register</title></svelte:head>

<Panel title="Register"
	><div class="flex justify-center max-w-full">
		<form
			id="signIn"
			autocomplete="on"
			novalidate
			class="mt-3 grid gap-3 w-[28rem]"
			use:form
			on:submit={register}
		>
			<div class="">
				<h4 class="font-bold text-4xl mb-1 text-center">Welcome Back</h4>
				<p class="text-center font-normal text-xl">Login into your account</p>
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
			<div class="grid gap-1">
				<div class="h-fit">
					<InputText
						label="Email"
						type="email"
						bind:value={user.email}
						id={$emailInput.id}
						field={emailInput}
						required
						pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{'{'}2,4{'}'}$"
						placeholder="Enter your email"
						invalidText={$emailInput.valueMissing
							? 'Email is required'
							: $emailInput.typeMismatch
								? 'Email not available'
								: $emailInput.patternMismatch
									? 'Email error syntax'
									: 'Nice'}
						showMessage={!$emailInput.show}
					/>
				</div>
				<div class="h-fit">
					<InputText
						label="Name"
						type="text"
						bind:value={user.name}
						id={$nameInput.id}
						field={nameInput}
						required
						pattern="[a-zA-Z\s]+"
						placeholder="Enter your name"
						invalidText={$nameInput.valueMissing
							? 'Name is required'
							: $nameInput.typeMismatch
								? 'Name not available'
								: $nameInput.patternMismatch
									? 'Name must be word'
									: 'Nice'}
						showMessage={!$nameInput.show}
					/>
				</div>
				<div class="">
					<InputPassword
						label="Password"
						field={passwordInput}
						bind:value={user.password}
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
									: 'Nice'}
						showMessage={!$passwordInput.show}
					/>
					<div></div>
				</div>
				<div class="">
					<InputPassword
						label="Confirm Password"
						field={confirmPasswordInput}
						bind:value={confirmPasswordValue}
						min={8}
						max={30}
						id="password"
						required
						placeholder="Input your password"
						invalidText={$confirmPasswordInput.valueMissing
							? 'Password is required'
							: $confirmPasswordInput.tooShort
								? 'Password must has 8 character'
								: $confirmPasswordInput.patternMismatch
									? 'Must contain at least one uppercase, lowercase, and number'
									: passwordMatch()
										? 'Confirm password not match with password'
										: ''}
						showMessage={!$confirmPasswordInput.show}
					/>
					<div></div>
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
				classStyled=" w-full uppercase border-2 border-gray-500 mt-3">Register</Button
			>
		</form>
	</div>
</Panel>
