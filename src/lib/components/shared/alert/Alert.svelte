<script lang="ts">
	export let type = 'error';
	export let title = 'An error occurred';
	export let titleElement = 'h2';
</script>

<div
	class="rounded-2xl p-8 text-white {type === 'error' ? 'bg-red-600' : ''}"
	role="alert"
	tabindex="-1"
>
	<svelte:element this={titleElement} class="text-xl mb-4">{title}</svelte:element>
	<slot />
</div>
