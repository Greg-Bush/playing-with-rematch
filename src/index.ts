const INPUT = [
	['Mallory', 'Everest', 'Mont Blanc', 'Pillar Rock'],
	['Mawson', 'South Pole', 'New Hebrides'],
	['Hillary', 'Everest', 'South Pole'],
];

const OUTPUT = [
	['Everest', 'Hillary', 'Mallory'],
	['South Pole', 'Hillary', 'Mawson'],
	['Mont Blanc', 'Mallory'],
	['Pillar Rock', 'Mallory'],
	['New Hebrides', 'Mawson'],
];

function done(explorers) {
	'use strict';
	if (!Array.isArray(explorers)) {
		throw new Error('invalid "explorers" param format');
	}
	if (explorers.length === 0) {
		const result = [];
		console.log(result);
		return result;
	}
	const toponymsMap = new Map();
	for (let i = 0; i < explorers.length; i++) {
		const line = explorers[i];
		if (!Array.isArray(line)) {
			throw new Error('invalid "explorers" param format');
		}
		if (line.length < 2) {
			continue;
		}

		const explorer = line[0];
		for (let j = 1; j < line.length; j++) {
			const value = line[j];
			let explorersSet = toponymsMap.get(value);
			if (!explorersSet) {
				explorersSet = new Set();
				toponymsMap.set(value, explorersSet);
			}
			explorersSet.add(explorer);
		}
	}
	const result = [];

	toponymsMap.forEach((value, key) => {
		const line = [key];

		value.forEach((v) => {
			line.push(v);
		});

		result.push(line);
	});

	console.log(result);
	return result;
}

done(INPUT);