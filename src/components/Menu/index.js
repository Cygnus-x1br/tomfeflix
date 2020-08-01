import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from '../components/ButtonLinkl';
import Button from '../Button';
//Antes o button era com o componente ButtonLink, depois utilizou o styled-components.
//Style foi ajustado com as="nome da classe atribuida"
function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="" />
      </a>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
