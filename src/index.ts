const sequences = (n) => {
	const numbersSequence = [];
	const result = [];
	for (let i = 1; i <= n; i++) {
		numbersSequence.push(i);
		result.push(formatSequence(numbersSequence));
	}
	return result;
};

const formatSequence = (sequence) => {
	if (sequence.length === 0) {
		return;
	}
	if (sequence.length % 2 === 0) {
		let result = sequence[sequence.length - 1].toString();
		for (let i = sequence.length - 2; i >= 0; i--) {
			result += '-';
			result += sequence[i];
		}
		return result;
	}
	{
		let result = sequence[0].toString();
		for (let i = 1; i < sequence.length; i++) {
			result += '-';
			result += sequence[i];
		}
		return result;
	}
};

console.log(sequences(5));
