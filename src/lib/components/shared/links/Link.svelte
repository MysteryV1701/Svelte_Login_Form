<script lang="ts">
	export let href: string | null | undefined;
	export let testId: string | undefined = undefined;
	export let fontBold: boolean = false;
	export let typeText: boolean = false;
	export let fixedSize: boolean = false;
	export let underline: boolean = false;
	let className = '';
	if (typeText) {
		className = /*tw*/ `${fixedSize ? 'w-32' : ''}  ${underline ? 'underline' : ''} rounded-xl p-2 text-base flex justify-center items-center  hover:text-blue-600 transition-all duration-200 ${fontBold ? 'font-semibold' : 'font-normal'}`;
	} else {
		className = `${fixedSize ? 'w-32' : ''} rounded-xl bg-blue-400 p-2 text-base flex justify-center items-center hover:bg-blue-600 hover:text-gray-200 transition-all duration-200 ${fontBold ? 'font-semibold' : 'font-normal'}`;
	}
</script>

{#if href}
	<a class={className} {href} data-testId={testId} on:click><slot /></a>
{:else}
	<span class={className} data-testId={testId}><slot /></span>
{/if}
