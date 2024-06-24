<script lang="ts">
	import Links from '../shared/links/Link.svelte';
	import type { UserInterface } from '$lib/interface';
	import { enhance } from '$app/forms';
	export let loginSession: UserInterface | null = null;

	let isDropdownOpen: boolean = false;
	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen;
	};
	const handleDropdownFocusLoss = ({
		relatedTarget,
		currentTarget
	}: {
		relatedTarget: EventTarget | null;
		currentTarget: HTMLElement;
	}) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		isDropdownOpen = false;
	};
</script>

<nav class="w-full py-6 bg-transparent grid" aria-label="Main Navigation">
	<ul class="list-none m-0 flex justify-between items-center" role="navigation">
		<li><a class="text-3xl font-semibold" href="/">LOGO</a></li>
		{#if loginSession}
			<li class="relative" on:focusout={handleDropdownFocusLoss}>
				<button
					id="dropdownDefaultButton"
					data-dropdown-toggle="dropdown"
					on:click={handleDropdownClick}
					class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					type="button"
					>{loginSession.name}<svg
						class="w-2.5 h-2.5 ms-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 1 4 4 4-4"
						/>
					</svg>
				</button>
				<div
					id="dropdown"
					class="absolute top-full left-1/2 -translate-x-1/2 translate-y-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
					style:visibility={isDropdownOpen ? 'visible' : 'hidden'}
				>
					<ul
						class="py-2 text-sm text-gray-700 dark:text-gray-200"
						aria-labelledby="dropdownDefaultButton"
					>
						{#if loginSession.role === 'admin'}
							<li><Links href="/admin">Dashboards</Links></li>
						{:else if loginSession.role == 'manager'}
							<li><Links href="/manager">Simple</Links></li>
						{:else}
							<li><Links href="/" typeText>Profile</Links></li>
						{/if}
						<li>
							<form action="/login?/logout" method="POST" use:enhance>
								<button type="submit" class="" role="menuitem">Sign out</button>
							</form>
						</li>
					</ul>
				</div>
			</li>
		{:else}
			<li>
				<ul class="flex gap-5">
					<li>
						<Links href={'/login'} fixedSize typeText>Đăng nhập</Links>
					</li>
					<li>
						<Links href={'/register'} fixedSize fontBold>Đăng ký</Links>
					</li>
				</ul>
			</li>
		{/if}
	</ul>
</nav>
