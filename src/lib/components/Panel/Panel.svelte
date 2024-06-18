<script lang="ts">
	export let title: string = '';
	export let level = 'h3';
</script>

<div class="block rounded-3xl bg-gray-50 p-6">
	{#if title}
		<svelte:element this={level} class="mb-2 text-2xl font-semibold">
			{title}
		</svelte:element>
	{/if}
	<slot><!-- optional fallback --></slot>
</div>
