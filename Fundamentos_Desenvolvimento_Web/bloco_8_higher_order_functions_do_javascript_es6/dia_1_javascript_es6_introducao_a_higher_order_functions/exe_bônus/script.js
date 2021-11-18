const mage = {
	healthPoints: 130,
	intelligence: 45,
	mana: 125,
	damage: undefined,
};

const warrior = {
	healthPoints: 200,
	strength: 30,
	weaponDmg: 2,
	damage: undefined,
};

const dragon = {
	healthPoints: 350,
	strength: 50,
	damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => {
	let damage = Math.round(Math.random() * dragon.strength + 15);
	return damage;
};

const damageWarrior = () => {
	let damege = Math.round(
		Math.random() * warrior.strength + warrior.strength * warrior.weaponDmg
	);
	return damege;
};

const resourceSpent = () => {
	let damage;
	damage = Math.round(
		Math.random() * (mage.intelligence * 2) + mage.intelligence
	);
	let mana = 0;
	if (mage.mana < 15) {
		damage = 'Não possui mana suficiente';
	} else {
		mana = -15;
	}
	return { damage, mana };
};

const gameActions = {
	turnPersonWarrior: (damageWarrior) => {
		let damage = damageWarrior();
		dragon.healthPoints -= damage;
		warrior.damage = damage;
	},
	turnPersonMage: (resourceSpent) => {
		let damage = resourceSpent().damage;
		let mana = resourceSpent().mana;
		dragon.healthPoints -= damage;
		mage.damage = damage;
		mage.mana += mana;
	},
	turnPersonDragon: (damageDragon) => {
		let damage = damageDragon();
		warrior.healthPoints -= damage;
		mage.healthPoints -= damage;
		dragon.damage = damage;
	},
	retornFunction: (turn) => {
		gameActions.turnPersonWarrior(damageWarrior);
		gameActions.turnPersonMage(resourceSpent);
		gameActions.turnPersonDragon(damageDragon);

		return battleMembers;
	},
};

console.log(gameActions.retornFunction());
