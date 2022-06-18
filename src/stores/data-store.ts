import { writable } from 'svelte/store';
import { z } from 'zod';
import { getPaddedMonth } from '../utils/get-padded-month';

const dataValidator = z.object({
	name: z.string(),
	email: z.string(),
	dob: z.string(),
	color: z.string(),
	age: z.string(),
	createdAt: z.string()
});

type DataType = z.infer<typeof dataValidator>;

let stored: DataType[] = [];

if (typeof window !== 'undefined') {
	if (localStorage.getItem('data')) {
		stored = JSON.parse(localStorage.getItem('data') || '[]');
	}
}

export const data = writable(stored);

const formDataValidator = z.object({
	name: z.string(),
	email: z.string(),
	dob: z.string(),
	color: z.string()
});

type FormData = z.infer<typeof formDataValidator>;

export const addData = (input: FormData) => {
	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth() + 1;
	const currentDay = today.getDate();

	const birthday = new Date(input.dob);
	const dobYear = birthday.getFullYear();
	const dobMonth = birthday.getMonth() + 1;
	const dobDay = birthday.getDate();

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

	data.update((data) => [
		...data,
		{
			...input,
			dob: `${dobDay}/${getPaddedMonth(dobMonth)}/${dobYear}`,
			age: `${yearsAge} years ${monthAge + 1} months`,
			createdAt: `${getPaddedMonth(currentMonth)}/${currentDay}/${currentYear}`
		}
	]);
};

data.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.data = JSON.stringify(value);
	}
});
