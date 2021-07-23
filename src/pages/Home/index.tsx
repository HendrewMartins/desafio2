import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProdutoList } from './styles';
import { api } from '../../services/api';
import { formatPreco } from '../../util/format';
import { useCarrinho } from '../../hooks/useCarrinho';

interface Produto {
  id: number;
  titulo: string;
  preco: number;
  imagem: string;
}

interface ProdutoFormatted extends Produto {
  precoFormatted: string;
}

interface CarrinhoItemsSaldo {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [produtos, setProdutos] = useState<ProdutoFormatted[]>([]);
  const { addProduto, carrinho } = useCarrinho();

  const carrinhoItemsSaldo = carrinho.reduce((sumSaldo, produto) => {
    return sumSaldo = {
      ...sumSaldo,
      [produto.id]: produto.saldo
    }
  }, {} as CarrinhoItemsSaldo)

  useEffect(() => {
    async function loadProdutos() {
      const response = await api.get('produtos');

      const produtos: Produto[] = response.data;
      const formattedProdutos = produtos.map(produtos => ({
        ...produtos,
        precoFormatted: formatPreco(produtos.preco)
      }));

      setProdutos(formattedProdutos);
    }

    loadProdutos();
  }, []);

  function handleAddProdutos(id: number) {
    addProduto(id);
  }

  return (
    <ProdutoList>
      {produtos.map(produto => (
        <li key={produto.id}>
          <img src={produto.imagem} alt={produto.titulo} />
          <strong>{produto.titulo}</strong>
          <span>{produto.precoFormatted}</span>
          <button
            type="button"
            onClick={() => handleAddProdutos(produto.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {carrinhoItemsSaldo[produto.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}

    </ProdutoList>
  );
};

export default Home;
