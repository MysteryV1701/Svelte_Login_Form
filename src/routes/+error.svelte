<script lang="ts" context="module">
	import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>
<h4>{$page.error?.message}</h4>

<!-- <h1>{$page.status} {$page.error?.message} How to disappear</h1> -->
