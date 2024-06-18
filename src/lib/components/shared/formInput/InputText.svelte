<script lang="ts">
	import type { Field } from 'svelte-form-helper';

	export let field: Field;
	export let label: string | null = '';
	export let id: string;
	export let type: string = 'text';
	export let placeholder: string;
	export let value: string | null | undefined = '';
	export let invalidText: string;
	export let required: boolean = true;
	export let disable: boolean = false;
	export let readonly: boolean = false;
	export let pattern: string = '';
	export let classStyled: string = '';
	export let showMessage: boolean = false;
	$: className =
		/*tw*/ 'h-fit  py-4 px-3 rounded-xl w-full border-2 border-gray-300 placeholder:font-medium focus:outline-none focus:border-gray-300 focus:bg-white bg-gray-50/100 data-[touched]:valid:text-green-700 data-[touched]:valid:border-green-700 data-[touched]:invalid:text-red-700 data-[touched]:invalid:border-red-700' +
		classStyled;

	function typeActions(node: { type: string }) {
		node.type = type;
	}
</script>

{#if label}
	<label for={id} class="font-semibold text-gray-800 text-base mb-1 block">{label}</label>
{/if}
<input
	use:typeActions
	class={className}
	use:field
	bind:value
	{required}
	{placeholder}
	{id}
	autocomplete={type}
	disabled={disable}
	{readonly}
	{pattern}
	on:blur
	on:change
/>
<div class="h-5">
	<span class="text-sm text-red-600" hidden={showMessage}>
		{invalidText}
	</span>
</div>
