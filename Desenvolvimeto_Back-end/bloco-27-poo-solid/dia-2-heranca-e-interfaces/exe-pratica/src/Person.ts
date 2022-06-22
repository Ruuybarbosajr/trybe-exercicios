export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    if (name.length < 3) throw new Error('O nome deve ter no mínimo três caracteres')
    if (Date.now() < new Date(birthDate).getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro')
    if((Date.now() - birthDate.getTime()) / (1000* 3600 * 24) / 365.25 > 120) throw new Error(' A pessoa não pode possuir mais de 120 anos')
    this._name = name
    this._birthDate = birthDate
  }

  get name(): string {
    return this._name
  }

  get birthDate(): Date {
    return this._birthDate
  }
}


