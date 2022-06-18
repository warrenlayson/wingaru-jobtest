export const getPaddedMonth = (month: number) => {
	return month < 10 ? `0${month}` : month;
};
