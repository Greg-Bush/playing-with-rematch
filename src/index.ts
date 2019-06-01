const servers = [
	'srv-a', // ok  
	'srv-b', // fail  
	'srv-c', // fail  
	'srv-d'  // fail  
];

const check = (name) => new Promise((res) => setTimeout(res, 100)).then(() => name !== 'srv-d');

function process(servers, check) {
	// Your code here.
	const processPromisesArray = (promisesAccessors, index) => {
		if (index < promisesAccessors.length) {
			return promisesAccessors[index]().then(c => {
				if (c) {
					return processPromisesArray(promisesAccessors, index + 1);
				}
				return servers[index];
			});
		}
		return Promise.resolve(null);
	};

	const promises = servers.map(name => () => check(name));
	return processPromisesArray(promises, 0);
};

console.log(process(servers, check).then(r => console.log(r)));

