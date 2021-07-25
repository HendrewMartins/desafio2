import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Carrinho } from './styles';
import { useCarrinho } from '../../hooks/useCarrinho';

const Header = (): JSX.Element => {
  const { carrinho } = useCarrinho();
  const carrinhoSize = carrinho.length;

  return (
    <Container>
      <Link to="/">
        Desafio #2
        <img src={logo} alt="Desafio" />
      </Link>

      <Carrinho to="/carrinho">
        <div>
          <strong>Carrinho de Compras</strong>
          <span>
            {carrinhoSize === 1 ? `${carrinhoSize} item` : `${carrinhoSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Carrinho>
    </Container>
  );
};

export default Header;
