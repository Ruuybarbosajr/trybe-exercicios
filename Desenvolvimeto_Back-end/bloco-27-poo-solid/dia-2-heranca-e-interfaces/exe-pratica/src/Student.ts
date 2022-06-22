import Person from './Person';

export default class extends Person{
  private _enrollment = Math.random() * 9**16;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  get enrollment() { return this._enrollment }

  get examsGrandes() { return this._examsGrades }

  get worksGrades() { return this._worksGrades }

  set examsGrandes(exams: number[]) {
    if (exams.length > 4) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas')
    this._examsGrades = exams
  }

  set worksGrades(works: number[]) {
    if (works.length > 2) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas')
    this._worksGrades = works
  }

  private sumExams(): number {
    return this._examsGrades.reduce((acc, grade) => acc + grade, 0)
  }

  private sumWorks(): number {
    return this._worksGrades.reduce((acc, grade) => acc + grade, 0)
  }

  public sumGrades(): number {
    return this.sumExams() + this.sumWorks()
  }

  public sumAvaregeGrade(): number {
    return this.sumGrades() / (this._examsGrades.length + this._worksGrades.length)
  }

  public generateEnrollment() { return this._enrollment }
}