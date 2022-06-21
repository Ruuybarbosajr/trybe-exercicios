export default class {
  public dia: number;
  public mes: number;
  public ano: number;

  constructor(dia: number, mes: number, ano: number) {
    if (isNaN(Number(new Date(`${ano}/${mes}/${dia}`)))) {
      this.dia = 1;
      this.mes = 1;
      this.ano = 1990;
    } else {
      this.dia = dia
      this.mes = mes;
      this.ano = ano
    }
  }
}