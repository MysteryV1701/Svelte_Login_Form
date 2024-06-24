<script lang="ts" generics="T">
	import { Loader2 } from 'lucide-svelte';
	export let promise: Promise<T>;
	export let showLoader: boolean = true;
</script>

{#await promise}
	{#if showLoader}
		<Loader2 class="rotate"></Loader2>
	{/if}
{:then value}
	<slot {value} />
{/await}
