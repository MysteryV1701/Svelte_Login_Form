<script lang="ts">
	import { MarkGithub16 } from 'svelte-oct';
	export let status: number;
	$: [first, second, third] = Array.from(String(status), Number);
</script>

<div class="px-8"></div>
