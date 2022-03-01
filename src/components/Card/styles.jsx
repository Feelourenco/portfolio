import styled from 'styled-components'

export const Container = styled.div`
  background: #D2D2D2;
  width: 250px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin-right: 20px;
  transition: 0.2s;

  &:hover{
    width: 251px;
    height: 401px;
    box-shadow: 10px 10px 10px #000;
  }
`