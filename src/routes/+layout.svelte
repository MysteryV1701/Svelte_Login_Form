<script lang="ts">
	import './app.css';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import Toast from '$lib/components/shared/toast/Toast.svelte';
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
</script>

<Toast />
<div class="min-h-[100vh]">
	<NavBar loginSession={data.user} />
	<slot />
</div>
