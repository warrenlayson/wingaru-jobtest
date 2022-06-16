<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
</script>

<svelte:head>
	<title>Wingaru</title>
</svelte:head>

<div class="p-8 max-w-6xl mx-auto">
	<Nav />

	<slot />
</div>
