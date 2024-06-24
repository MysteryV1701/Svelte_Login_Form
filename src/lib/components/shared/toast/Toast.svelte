<script lang="ts" context="module">
	export type ToastData = {
		type: 'success' | 'error' | 'warning' | 'info';
		title: string;
		description: string;
	};
	const {
		elements: { content, title, description, close },
		helpers,
		states: { toasts },
		actions: { portal }
	} = createToaster<ToastData>();

	export const createToast = (data: ToastData) => {
		helpers.addToast({
			data
		});
	};
</script>

<script lang="ts">
	import { createToaster, melt } from '@melt-ui/svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
</script>

<div class="fixed top-0 right-0 z-10 m-2 flex max-w-80 flex-col gap-4" use:portal>
	{#each $toasts as { id, data } (id)}
		<div
			class="flex items-start gap-4 rounded p-2 {data.type == 'success'
				? 'bg-green-800 text-white'
				: ''}"
			use:melt={$content(id)}
			animate:flip={{ duration: 500 }}
			in:fly={{ duration: 150, x: '100%' }}
			out:fly={{ duration: 150, x: '100%' }}
		>
			<div class="">
				<h4 use:melt={$title(id)} class="font-semibold">{data.title}</h4>
				<p use:melt={$description(id)} class="text-sm">{data.description}</p>
			</div>
			<button use:melt={$close(id)} class="close"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M18 6 6 18" /><path d="m6 6 12 12" />
				</svg>
			</button>
		</div>
	{/each}
</div>
