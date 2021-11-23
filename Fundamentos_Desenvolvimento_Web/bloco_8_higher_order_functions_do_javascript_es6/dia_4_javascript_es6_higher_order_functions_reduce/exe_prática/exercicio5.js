const names = [
	'Aanemarie',
	'Adervandes',
	'Akifusa',
	'Abegildo',
	'Adicellia',
	'Aladonata',
	'Abeladerco',
	'Adieidy',
	'Alarucha',
];

const containsA = names.reduce(
	(accNameWithMoreA, namesOfArr) =>
		accNameWithMoreA + namesOfArr.replace(/[^a || A]/g, '').length,
	0
);
console.log(containsA);
