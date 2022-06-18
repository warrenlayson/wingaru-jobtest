import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import ResultTable from '../result-table.svelte';

describe('result table component', () => {
	test('should render table', () => {
		const { container } = render(ResultTable);
		expect(container).toBeTruthy();
	});
});
