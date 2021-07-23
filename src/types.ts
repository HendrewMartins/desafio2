export interface Produto {
  id: number;
  titulo: string;
  preco: number;
  imagem: string;
  saldo: number;
}

export interface Estoque {
  id: number;
  saldo: number;
}
