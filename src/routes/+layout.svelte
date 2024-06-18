<script lang="ts">
	import './app.css';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
	import { loginSession, toast } from '../lib/stores/index';
	const { user } = data;
	$loginSession = user;
</script>

<NavBar loginSession={$loginSession}></NavBar>

<main class="w-full">
	<slot />
</main>

<style lang="postcss">
</style>
