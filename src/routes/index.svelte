<script lang="ts">
	import { addData } from '../stores/data-store';

	let name = '';
	let email = '';
	let dob = '';
	let color = '#000';

	let formSubmitted = false;

	const onSubmit = () => {
		let today = new Date();
		let birthday = new Date(dob);

		const currentYear = today.getFullYear();
		const currentMonth = today.getMonth();

		const dobYear = birthday.getFullYear();
		let dobMonth = birthday.getMonth();

		// get years
		let yearsAge = currentYear - dobYear;

		let monthAge: number;

		// get months
		if (currentMonth >= dobMonth) {
			// get months when current month is greater
			monthAge = currentMonth - dobMonth;
		} else {
			yearsAge -= 1;
			monthAge = 12 + currentMonth - dobMonth;
		}

		// create new Date() and get date in format MM/DD/YYYY
		let date = new Date();
		let dateString = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

		let birthMonth: string;
		dobMonth += 1;

		if (dobMonth < 10) {
			birthMonth = '0' + dobMonth;
		} else {
			birthMonth = dobMonth.toString();
		}

		addData({
			name,
			email,
			dob: `${birthday.getDate()}/${birthMonth}/${birthday.getFullYear()}`,
			color,
			age: `${yearsAge} years and ${monthAge + 1} months`,
			createdAt: dateString
		});

		formSubmitted = true;
	};
</script>

<h1 class="text-4xl text-center my-8">Tell Us About Yourself</h1>

{#if formSubmitted}
	<div class="max-w-2xl mx-auto shadow-md  p-8">
		<h2 class="text-2xl">Thank you for telling us about yourself. Your results have been saved</h2>
	</div>
{:else}
	<form class="container max-w-md w-full mx-auto space-y-4" on:submit|preventDefault={onSubmit}>
		<div class="flex flex-col space-y-2">
			<label for="name">Full Name</label>
			<input type="text" name="name" id="name" bind:value={name} />
		</div>
		<div class="flex flex-col space-y-2">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} />
		</div>

		<div class="flex flex-col space-y-2">
			<label for="date">Date of Birth</label>
			<input type="date" id="date" bind:value={dob} />
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
