<script lang="ts">
	export let title: string = '';
	export let level = 'h3';
</script>

<div class="rounded-xl bg-gray-50 p-6 mb-4 grid">
	{#if title}
		<svelte:element this={level} class="mb-2 text-2xl font-semibold">
			{title}
		</svelte:element>
	{/if}
	<slot><!-- optional fallback --></slot>
</div>
