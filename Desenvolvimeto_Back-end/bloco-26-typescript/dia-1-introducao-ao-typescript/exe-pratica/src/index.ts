// // const array: string[][] = [['oi'], ['oi']]
// // const tupla: [string, number] = ['oi', 1] 

// type Adrdress = {
//   street: string,
//   number: number
// }

// // type Person = {
// //   name: string,
// //   age: number,
// //   // adress: {street: string, number: number}
// //   adress?: Adrdress
// // }

// // const object: Person = {
// //   name: 'Ruy',
// //   age: 23,
// // }


// type Bird = {
//   name: string,
// }

// const status: 'líquido' | 'sólido' | 'gasoso' = 'líquido'

// const id: string | number = 123456789012

// const so: 'linux' | 'mac' | 'windows' = 'mac'

// enum EyeColor {
//   Black = "Pretos",
//   Blue = "Azuis",
//   Green = "Verdes",
//   Brown = "Castanhos",
// }

// interface Person {
//   name: string;
//   birthDate: Date;
//   eyeColor: EyeColor
// }

// class Person {
//   constructor(name: string, birthDate: Date, eyeColor: EyeColor){
//     this.name = name
//     this.birthDate = birthDate
//     this.eyeColor = eyeColor
//   }

//     speak(): void {}

//     eat(): void {}

//     walk(): void {}
// }


type Person ={
  name: string,
  age: number
}

interface Boss extends Person {
  manager: boolean
}

// class Boss {
//   constructor(name: string, age: number, manager: boolean) {
//     this.name = name
//     this.age = age
//     this.manager = manager
//   }
// }