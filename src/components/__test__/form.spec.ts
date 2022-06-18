import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Form from '../form.svelte';

describe('form component', () => {
	test('should render form', () => {
		const { container } = render(Form);
		expect(container).toBeTruthy();
	});
});
