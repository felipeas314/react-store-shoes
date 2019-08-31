import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './style';
import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';

export default function Header(){
  return (
    <Container>
       <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 Itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF"/>
      </Cart>
    </Container>
  );
}