<script lang="ts">
	export let type: 'submit' | 'button' | 'reset' = 'button';
	export let variant: 'filled' | 'ghost' | 'outline' = 'filled';
	export let disable: boolean = false;
	export let loading: boolean = false;
	export let id: string | null = null;
	export let title: string | null | undefined;
	export let classStyled: string = '';
	export let size: 'sm' | 'md' | 'lg' = 'sm';
	let className = `text-gray-900 text-center relative font-semibold whitespace-nowrap align-middle 
        outline-none inline-flex items-center justify-center select-none overflow-hidden gap-x-2  ${classStyled} `;
	if (size == 'sm') {
		className += ' px-2 py-1 ';
	} else if (size == 'md') {
		className += ' px-4 py-2 ';
	} else className += ' px-6 py-3 ';
	if (variant == 'ghost') {
		className +=
			'rounded-lg border border-transparent hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none';
	} else if (variant == 'outline') {
		className += /*tw*/ 'border border-gray-300 rounded-lg bg-gray-50';
	}
</script>

<button
	{id}
	{type}
	disabled={disable || loading}
	class={className}
	{title}
	on:click
	on:focus
	on:blur
>
	<slot />
</button>
