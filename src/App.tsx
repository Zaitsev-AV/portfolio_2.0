import styled from "styled-components";
import {MyAnimation} from "@/styles/animations/Animations.tsx";

export function App() {
  return (
    <div>
      <Menu>
        <ul>
          <li><a href="">menu item</a></li>
          <li><a href="">menu item</a></li>
          <li><a href="">menu item</a></li>
        </ul>
      </Menu>
      <Wrapper>
        <StyledBtn>
          Какой-то текст
        </StyledBtn>
        <StyledBtn as='a'>
          Какой-то текст link
        </StyledBtn>
        <SupperButton>New button</SupperButton>
        <SupperButton as={Link}>New button as Link</SupperButton>
      </Wrapper>
    </div>
  )
}

const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: brown;
  padding: 10px 20px;

  color: #242424;
`


const Link = styled.a`
  color: magenta;
  background-color: aqua;

`

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const SupperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #747bff;

  &:hover {
    background-color: burlywood;
  }

  &:last-child:hover {
    background-color: chartreuse;
  }
  &:hover {
    animation: ${MyAnimation} 2s ease infinite;
  }
`

const Menu = styled.nav`
  ul {
    display: flex;
    padding: 0;
    list-style: none;

    li > a {
      color: #61942e;
    }
    li + li {
      margin-left: 20px;
    }
  }
`
