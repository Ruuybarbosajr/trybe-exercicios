import IEmployees from './IEmployee';
import Person from './Person';
import Subject from './Subject';

class Teach extends Person implements IEmployees {
  private _registration = '';
  private _salary = 0;
  private _admissionDate = new Date();
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate)
    this.salary = salary
    this._subject = subject
    this._registration = this.generateRegistration()
  }

  generateRegistration(): string {
    return '123456789123456789'
  }
  
  get registration() {
    return this._registration
  };

  get salary() {
    return this._salary
  };

  get admissionDate() {
    return this._admissionDate
  };

  get subject() {
    return this._subject.name
  };

  set salary(value) {
    if (value < 0) throw new Error('O salário não pode ser negativo.')
    this._salary = value
  }

  set admissionDate(date: Date) {
    if (Date.now() < new Date(date).getTime()) throw new Error('A data de admissão não pode ser no futuro')
  };
}

const prof = new Teach('auoooo', new Date('1998/08/20'), 5000, new Subject('Matemática'))


export default Teach