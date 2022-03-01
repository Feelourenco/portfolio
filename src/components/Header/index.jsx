import React from "react";
import { Header, MenuItens } from './styles'

export default function Navbar(){
  return(
    <Header>
      <MenuItens to="/"> Perfil </MenuItens>
      <MenuItens to="/projects"> Projetos </MenuItens>
    </Header>
  )
}