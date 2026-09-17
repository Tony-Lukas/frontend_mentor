<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import solid_moon from '$lib/assets/moon-solid-full.svg';
    import regular_moon from '$lib/assets/moon-regular-full.svg';

	let { children } = $props();
	let {isDarkmood} = $state(false);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="bg-white">
	<div class="flex py-4 justify-between mx-auto max-w-10/12">
		<p class="font-bold text-2xl">Where is the world?</p>
		<button class="flex items-center">
			<img src="{regular_moon}" alt="Regular Moon" class="h-5">
			Dark Mode
		</button>
		

	</div>
	
</nav>
<main class="mx-auto max-w-10/12">
	{@render children()}
</main>
