// O item do pedido deve conter o nome do pedido (ex. "Batatas fritas"; "Açaí") e o preço;
export default class {
  public nome: string;
  public preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco
  }
}