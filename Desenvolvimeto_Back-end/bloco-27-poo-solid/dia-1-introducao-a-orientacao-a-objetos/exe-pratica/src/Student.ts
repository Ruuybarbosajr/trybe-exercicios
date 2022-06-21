// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

export default class {
  public matricula: number;
  public nome: string;
  public provas: number[];
  public trabalhos: number[]

  constructor(matricula: number, nome: string, provas: number[], trabalhos: number[]) {
    this.matricula = matricula;
    this.nome = nome;
    this.provas = provas;
    this.trabalhos = trabalhos;
  }

  soma(): number {
    const provas = this.provas.reduce((acc, nota) => acc + nota ,0)
    const trabalhos = this.trabalhos.reduce((acc, nota) => acc + nota ,0)
    return provas + trabalhos
  }

  media(): number {
    const nota = this.soma()
    const media = nota / (this.provas.length + this.trabalhos.length)
    return media;
  }
}