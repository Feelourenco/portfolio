import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
export const MenuItens = styled(Link)`
color: #616d72;
padding: 5px;
text-decoration: none;
font-size: 17px;
transition: 0.5s;

&:hover{
  color: #FFBB33;
}

`

