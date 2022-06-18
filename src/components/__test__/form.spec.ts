import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/svelte';
import InputForm from '../input-form.svelte';

describe('form component', () => {
	test('should render form', () => {
		const { container } = render(InputForm);
		expect(container).toBeTruthy();
	});

	test('should show confirmation message after submitting form', async () => {
		render(InputForm);

		const fullName = screen.getByLabelText('Full Name');
		const email = screen.getByLabelText('Email');
		const birthday = screen.getByLabelText('Date of Birth');
		const color = screen.getByLabelText('Favorite Color');
		const submit = screen.getByText('Submit');

		await fireEvent.input(fullName, { target: { value: 'John Doe' } });
		await fireEvent.input(email, { target: { value: 'jdoe@gmail.com' } });
		await fireEvent.input(birthday, { target: { value: '01/01/2000' } });
		await fireEvent.input(color, { target: { value: '#000' } });
		await fireEvent.submit(submit);

		expect(
			screen.getByText('Thank you for telling us about yourself. Your results have been saved')
		).toBeTruthy();
	});
});
