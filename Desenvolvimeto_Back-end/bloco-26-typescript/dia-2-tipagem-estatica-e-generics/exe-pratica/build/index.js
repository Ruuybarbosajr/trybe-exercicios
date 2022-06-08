"use strict";
// Exercício 1: Crie uma classe Car cujo objeto representará um carro.
var Color;
(function (Color) {
    Color["black"] = "Black";
    Color["white"] = "White";
    Color["red"] = "Red";
    Color["silver"] = "Silver";
})(Color || (Color = {}));
var DoorStats;
(function (DoorStats) {
    DoorStats["driverDoor"] = "driver door";
    DoorStats["passengerDoor"] = "passenger door";
})(DoorStats || (DoorStats = {}));
var Direction;
(function (Direction) {
    Direction["left"] = "Left";
    Direction["rigth"] = "Rigth";
    Direction["front"] = "Front";
    Direction["backzinho"] = "Backzinho";
})(Direction || (Direction = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('BEEEEEEEEEEEEEEEEEEEEEEEEE');
    }
    openTheDoor(door) {
        console.log(`${door} are opened`);
    }
    closeTheDoor(door) {
        console.log(`${door} are closed`);
    }
    turnOn() {
        console.log('car turn on or turn on car');
    }
    turnOff() {
        console.log('car turn off or turn off car');
    }
    speedUp() {
        console.log('vruuUUUUUUUUMMMMMM');
    }
    speedDown() {
        console.log('VRUuuuuumnn');
    }
    stop() {
        console.log('stoped');
    }
    turn(side) {
        console.log(`turn on ${side}`);
    }
}
const uberCar = new Car('Pronto para incendiar o mundo', Color.silver, 4);
uberCar.turnOn();
uberCar.turn(Direction.front);
// passou 600m
uberCar.turn(Direction.left);
// passou 200m
// entrou no rotario
// passou a primeira saida
uberCar.turn(Direction.rigth);
uberCar.turn(Direction.front);
// passou 1,2km
// passou na padaria, e parou pra comer. Fim !
