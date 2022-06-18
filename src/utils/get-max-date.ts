export const getMaxDate = () => {
	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();
	const currentDay = today.getDate();

	const month = currentMonth + 1;
	let m = '';
	let d = '';

	if (month < 10) {
		m = '0' + month.toString();
	}

	if (currentDay < 10) {
		d = '0' + currentDay.toString();
	} else {
		d = currentDay.toString();
	}

	return currentYear + '-' + m + '-' + d;
};
