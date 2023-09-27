import styled from "styled-components";

export function App() {
  return (
    <div>
      <Wrapper>
        <StyledBtn>
          Какой-то текст
        </StyledBtn>
        <StyledBtn as='a'>
          Какой-то текст link
        </StyledBtn>
        <SupperButton>New button</SupperButton>
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
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const SupperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #747bff;
`