import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useCarrinho } from '../../hooks/useCarrinho';
import { formatPreco } from '../../util/format';
import { Container, ProdutoTable, Total } from './styles';
import { useHistory } from 'react-router-dom';

interface Produto {
  id: number;
  titulo: string;
  preco: number;
  imagem: string;
  saldo: number;
}

const Carrinho = (): JSX.Element => {
  const { carrinho, removeProduto, updateProdutoSaldo } = useCarrinho();
  const history = useHistory();

  const carrinhoFormatted = carrinho.map(produto => ({
    ...produto,
    precoFormatted: formatPreco(produto.preco),
    subtotal: formatPreco(produto.preco * produto.saldo)
  }))

  const total =
    formatPreco(
      carrinho.reduce((sumTotal, produto) => {
        return sumTotal += produto.saldo * produto.preco;
      }, 0)
    )

  function handleProdutoIncrement(produto: Produto) {
    updateProdutoSaldo({ produtoId: produto.id, saldo: produto.saldo + 1 });
  }

  function handleProdutoDecrement(produto: Produto) {
    updateProdutoSaldo({ produtoId: produto.id, saldo: produto.saldo - 1 });
  }

  function handleRemoveProduto(productId: number) {
    removeProduto(productId);
  }

  function handleCliente() {
        history.push('/cliente');
  }


  return (
    <Container>
      <ProdutoTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {carrinhoFormatted.map(produto => (
            <tr key={produto.id} >
              <td>
                <img src={produto.imagem} alt={produto.titulo} />
              </td>
              <td>
                <strong>{produto.titulo}</strong>
                <span>{produto.precoFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    disabled={produto.saldo <= 1}
                    onClick={() => handleProdutoDecrement(produto)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    readOnly
                    value={produto.saldo}
                  />
                  <button
                    type="button"
                    onClick={() => handleProdutoIncrement(produto)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{produto.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveProduto(produto.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </ProdutoTable>

      <footer>
        <button onClick={handleCliente} type="button">Dados Cliente</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Carrinho;
