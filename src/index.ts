interface Country {
	code: string;
	color: string | undefined;
}

/**  
 * @param {Country} startCountry  
 * @param {Function} getNeightbors  
 */
module.exports = function (startCountry, getNeightbors) {
	// Your code here.

	const result = [];

	const set = new Set();
	set.add(startCountry.code);

	if (typeof startCountry.color === 'undefined') {
		result.push(startCountry.code);
	}

	const processPromisesArray = (promisesAccessors, index) => {
		if (index < promisesAccessors.length) {
			return promisesAccessors[index]().then(c => {
				return processPromisesArray(promisesAccessors, index + 1);
			});
		}
		return Promise.resolve(index);
	};

	const bypass = (counties) => {
		if (!Array.isArray(counties)) {
			return Promise.resolve();
		}
		const restCounties = [];
		for (let i = 0; i < counties.length; i++) {
			const country = counties[i];
			if (set.has(country.code)) {
				continue;
			} else {
				restCounties.push(country.code);
				set.add(country.code);
			}
			if (typeof country.color === 'undefined') {
				result.push(country.code);
			}
		}
		const promises = restCounties.map(c => () => getNeightbors(c).then(neighbors =>
			bypass(neighbors)));
		return processPromisesArray(promises, 0);
	};

	const resultPromise = new Promise(resolve => {
		getNeightbors(startCountry.code).then((neighbors) => {
			bypass(neighbors).then(() => resolve(result));
		});
	});

	return resultPromise;
}



