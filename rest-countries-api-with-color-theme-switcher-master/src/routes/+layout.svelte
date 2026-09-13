<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="flex px-4 py-4 justify-between">
	<p class="font-bold text-2xl">Where is the world?</p>
	<button>Dark Mode</button>
</nav>
<main class="bg-gray-200 px-20">
	{@render children()}
</main>

