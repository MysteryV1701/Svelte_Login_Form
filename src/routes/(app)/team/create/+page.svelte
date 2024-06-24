<script lang="ts">
	import { goto } from '$app/navigation';
	import Panel from '$lib/components/Panel/Panel.svelte';
	import Button from '$lib/components/shared/button/Button.svelte';
	import TextFiled from '$lib/components/shared/textFiled/TextFiled.svelte';

	const cancel = () => {
		goto('/team');
	};
</script>

<Panel title="Create Team">
	<form method="post" class="grid gap-2">
		<TextFiled
			label="Your team name"
			type="text"
			name="team-name"
			required
			pattern="([a-zA-Z0-9_\s]+)"
			placeholder="Enter your name's team"
		/>
		<div class="">
			<Button type="submit" variant="outline" title="Upload File Button" classStyled="w-fit"
				>Create</Button
			>
			<Button
				type="button"
				variant="outline"
				title="Upload File Button"
				classStyled="w-fit"
				on:click={cancel}>Cancel</Button
			>
		</div>
	</form>
</Panel>
