export default interface IEmployees {
  registration: string;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string
}