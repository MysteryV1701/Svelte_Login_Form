<script lang="ts">
	import { page } from '$app/stores';
	import Panel from '$lib/components/Panel/Panel.svelte';
	import Link from '$lib/components/shared/links/Link.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Panel title="Your team">
	<a
		href="/team/create"
		class="p-2 border-2 block w-fit rounded-md border-gray-600 font-semibold text-sm justify-self-end hover:bg-blue-500 hover:text-gray-50 cursor-pointer transition-all hover:border-blue-500 hover:outline-none"
		>Create new team</a
	>
	{#if data.teams != null && data.teams.length > 0}
		<div class=" p-2">
			<ul class="bg-gray-600 p-4 rounded-md list-none grid grid-cols-2 gap-4">
				{#each data.teams as team}
					<li class="bg-gray-100 px-2 py-4 rounded">
						<a
							class=" font-semibold text-xl block"
							href={`/team/${team.team.slug}`}
							class:active={$page.url.pathname.includes(team.team.slug)}>{team.team.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}</Panel
>
