<script lang="ts">
	type InputType = 'text' | 'email' | 'tel' | 'password';
	export let name: string;
	export let label: string | null = '';
	export let type: InputType = 'text';
	export let placeholder: string;
	export let value: string = '';
	export let required: boolean = true;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let errors: string[] = [];
	export let autocomplete: string = 'off';
	export let pattern: string | null = null;
	$: className =
		/*tw*/ 'h-fit  py-4 px-3 rounded-xl w-full border-2 border-gray-300 placeholder:font-medium focus:outline-none focus:border-gray-300 focus:bg-white bg-gray-50/100 data-[touched]:valid:text-green-700 data-[touched]:valid:border-green-700 data-[touched]:invalid:text-red-700 data-[touched]:invalid:border-red-700';

	function typeActions(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="">
	{#if label}
		<label for={name} class="font-semibold text-gray-800 text-base mb-1 block">{label}</label>
	{/if}
	<input
		aria-invalid={errors.length > 0}
		class={className}
		use:typeActions
		bind:value
		{required}
		{placeholder}
		{name}
		id={name}
		{autocomplete}
		{disabled}
		{readonly}
		{pattern}
	/>
	{#each errors as error}
		<p class="tex-sm text-red-500">{error}</p>
	{/each}
</div>
