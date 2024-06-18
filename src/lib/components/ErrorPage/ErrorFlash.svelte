<script lang="ts">
	import { X16 } from 'svelte-oct';
	import Button from '../shared/button/Button.svelte';
	export let message: string | undefined;
	let show = Boolean(message);
	const handleCloseClick = () => (show = false);
</script>

{#if show}
	<div class="px-5 py-4 bg-yellow-200">
		<div class="flex py-2">
			<div class="flex-grow">{message}</div>
			<div class="">
				<Button type="button" disable={false} title={''} on:click={handleCloseClick}>{X16}</Button>
			</div>
		</div>
	</div>
{/if}
