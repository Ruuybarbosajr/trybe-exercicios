// Exercício 1: Crie uma classe Car cujo objeto representará um carro.
enum Color {
  black = 'Black',
  white = 'White',
  red = 'Red',
  silver = 'Silver'
}

enum DoorStats {
  driverDoor = 'driver door',
  passengerDoor = 'passenger door',
}

enum Direction {
  left = 'Left',
  rigth = 'Rigth',
  front = 'Front',
  backzinho = 'Backzinho'
}

interface Car {
  brand: string;
  color: Color;
  doors: number;
}

class Car {
  constructor(brand: string, color: Color, doors: number){
    this.brand = brand
    this.color = color
    this.doors = doors
  }

  honk(): void {
    console.log('BEEEEEEEEEEEEEEEEEEEEEEEEE')
  }

  openTheDoor(door: DoorStats): void {
    console.log(`${door} are opened`)
  }

  closeTheDoor(door: DoorStats): void {
    console.log(`${door} are closed`)
  }

  turnOn(): void {
    console.log('car turn on or turn on car')
  }

  turnOff(): void {
    console.log('car turn off or turn off car')
  }

  speedUp(): void {
    console.log('vruuUUUUUUUUMMMMMM')
  }

  speedDown(): void {
    console.log('VRUuuuuumnn')
  }

  stop(): void {
    console.log('stoped')
  }

  turn(side: Direction): void {
    console.log(`turn on ${side}`)
  }
}

const uberCar = new Car(
  'Pronto para incendiar o mundo',
  Color.silver,
  4
)

const theus = new Car('Pronto para incendiar o mundo',
Color.silver,
4)

uberCar.turnOn()
uberCar.turn(Direction.front)
// passou 600m
uberCar.turn(Direction.left)
// passou 200m
// entrou no rotario
// passou a primeira saida
uberCar.turn(Direction.rigth)
uberCar.turn(Direction.front)
// passou 1,2km
// passou na padaria, e parou pra comer. Fim !

// Exercício 3: Crie uma interface que represente uma pizza. Ela deve conter:

type slices = 4 | 6 | 8
type pizzaComum = 'Calabresa' | 'Frango' | 'Pepperoni'

type pizzaDoce = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow'

interface Pizza {
  flavor: string,
  slices: slices
}

// const calabresa = new Pizza('Calabresa', 8)
// const portuguesa = new Pizza('Portuguesa', 6)
// const nutela = new Pizza('Nutela', 4)

interface PizzaComum extends Pizza {
  flavor: pizzaComum,
}

interface PizzaDoce extends Pizza {
  flavor: pizzaDoce
}

const calabresa: PizzaComum = {
  flavor: 'Calabresa',
  slices: 6
}

