import { writable } from 'svelte/store';
import type { Data } from '../types';

let stored: Data[] = [];

if (typeof window !== 'undefined') {
	if (localStorage.getItem('data')) {
		stored = JSON.parse(localStorage.getItem('data') || '[]');
	}
}

export const data = writable<Data[]>(stored);

export const addData = (input: Data) => {
	data.update((data) => [...data, input]);
};

data.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.data = JSON.stringify(value);
	}
});
