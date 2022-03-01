import React from "react";
import { Container, PersonalInfo, Perfil, Sobre, SocialLinks, GithubButton, LinkedinButton, Cards } from './styles'
import img from '../../img/Avatar.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DiTerminalBadge } from "react-icons/di";
import Card from "../../components/Card";
import Skills from '../../components/Skills'

export default function Home() {


  return (
    <Container>
      <PersonalInfo>
        <Perfil>
          <img src={img} alt="Felipe" />
          <h2>Felipe Costa Lourenço</h2>
          <span>30 anos</span>
          <span>Programador</span>
          <span>São Paulo, SP - Brasil</span>
          <SocialLinks>
            <GithubButton to="#">
              <FaGithub />
              Github
            </GithubButton>
            <LinkedinButton to="#">
              <FaLinkedin />
              Linkedin
            </LinkedinButton>
          </SocialLinks>
        </Perfil>

        <Sobre>
          <DiTerminalBadge size={30} color="#FFBB33" />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </span>
        </Sobre>
      </PersonalInfo>
      <Skills />
      <Cards>
        <Card />
        <Card />
        <Card />
      </Cards>
    </Container>
  )
}
