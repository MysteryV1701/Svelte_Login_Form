<script lang="ts">
	import InputText from '$lib/components/shared/textFiled/TextFiled.svelte';
	import Button from '$lib/components/shared/button/Button.svelte';
	import Panel from '$lib/components/Panel/Panel.svelte';
	import Alert from '$lib/components/shared/alert/Alert.svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	export let form: ActionData;
</script>

<svelte:head><title>Register</title></svelte:head>

<Panel>
	{#if form?.errors}
		<Alert>
			{#each Object.values(form.errors) as error}
				<p>{error}</p>
			{/each}
		</Alert>
	{/if}
	<div class="flex justify-center max-w-full">
		<form
			id="signIn"
			autocomplete="on"
			novalidate
			class="mt-3 grid gap-3 w-[28rem]"
			use:enhance
			method="POST"
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
						name="email"
						required
						pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{'{'}2,4{'}'}$"
						placeholder="Enter your email"
					/>
				</div>
				<div class="h-fit">
					<InputText
						label="Name"
						type="text"
						name="name"
						required
						pattern="[a-zA-Z\s]+"
						placeholder="Enter your name"
					/>
				</div>
				<div class="">
					<InputText
						label="Password"
						type="password"
						name="password"
						required
						placeholder="Enter your password"
					/>
				</div>
				<div class="">
					<InputText
						label="Confirm Password"
						type="password"
						name="password_confirmation"
						required
						placeholder="Confirm your password"
					/>
				</div>
			</div>
			<Button
				type="submit"
				variant="outline"
				title="Login Button"
				size="lg"
				classStyled=" w-full uppercase border-2 border-gray-500 mt-3">Register</Button
			>
		</form>
	</div>
</Panel>
