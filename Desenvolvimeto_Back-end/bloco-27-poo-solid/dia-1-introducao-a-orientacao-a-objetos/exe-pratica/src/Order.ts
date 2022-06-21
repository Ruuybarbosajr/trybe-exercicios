// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: "cartão", "dinheiro") e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

// Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

import Item from './Item';

export default class {
  public cliente: string;
  public consumo: Item[];
  public pagamento: string;
  public desconto?: number;

  constructor(cliente: string, consumo: Item[], pagamento: string, desconto?: number) {
    this.cliente = cliente;
    this.consumo = consumo;
    this.pagamento = pagamento;
    this.desconto = desconto;
  }

  soma(): number {
    const soma = this.consumo.reduce((acc, item) => acc + item.preco ,0)
    return soma
  }

  descont() {
    const soma = this.soma()
    if (this.desconto) return soma * (1 + this.desconto)
    return soma
  }
}