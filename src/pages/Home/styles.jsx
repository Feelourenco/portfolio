import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
color: #FFF;
display: flex;
flex-direction: column;
margin: 80px auto;
`

export const PersonalInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 40%;
  margin-left: 100px;

  img{
    width: 100px;
    border-radius: 50%;
    
  }
`

export const Sobre = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 60%;


span{
  width: 70%;
}
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const GithubButton = styled(Link)`
background: #000;
color: #FFF;
padding: 6px 10px;
border-radius: 12px;
cursor: pointer;
transition: 0.5s;
margin-right: 5px;
width: 5.5em;
text-decoration: none;
text-align: center;
font-size: 13px;

svg {
  padding-right: 5px;
}

&:hover{
  opacity: 0.8;
}
`

export const LinkedinButton = styled(Link)`
background: #0e76a8;
color: #FFF;
padding: 5px 10px;
border-radius: 12px;
cursor: pointer;
transition: 0.5s;
width: 5.5em;
text-decoration: none;
text-align: center;
font-size: 13px;

svg {
  padding-right: 5px;
}

&:hover{
  opacity: 0.8;
}
`

export const Cards = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`