<script lang="ts">
	import { fade } from 'svelte/transition';
	import { addData } from '../stores/data-store';
	import { getMaxDate } from '../utils/get-max-date';

	let name = '';
	let email = '';
	let dob = '';
	let color = '#000000';

	let formSubmitted = false;

	const onSubmit = () => {
		addData({
			name,
			email,
			dob,
			color
		});

		formSubmitted = true;
	};
</script>

{#if formSubmitted}
	<div class="max-w-2xl mx-auto shadow-md  p-8" transition:fade={{ duration: 150 }}>
		<h2 class="text-2xl">Thank you for telling us about yourself. Your results have been saved</h2>
	</div>
{:else}
	<form class="container max-w-md w-full mx-auto space-y-4" on:submit|preventDefault={onSubmit}>
		<div class="flex flex-col space-y-2">
			<label for="name">Full Name</label>
			<input type="text" name="name" id="name" bind:value={name} required />
		</div>
		<div class="flex flex-col space-y-2">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} required />
		</div>

		<div class="flex flex-col space-y-2">
			<label for="date">Date of Birth</label>
			<input type="date" id="date" bind:value={dob} max={getMaxDate()} required />
		</div>

		<div class="flex justify-between items-center ">
			<label for="color">Favorite Color</label>
			<input type="color" id="color" bind:value={color} />
		</div>

		<button
			type="submit"
			class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
			>Submit</button
		>
	</form>
{/if}
