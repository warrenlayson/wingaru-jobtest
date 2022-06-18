import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Nav from '../nav.svelte';
describe('nav component', () => {
	test('should confirm there are two clickable links', () => {
		const { container } = render(Nav);

		const links = container.querySelectorAll('a');
		expect(links.length).toBe(2);
	});
});
