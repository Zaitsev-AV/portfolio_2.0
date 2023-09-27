import styled from "styled-components";

export function App() {
  return (
      <div>
        <StyledBtn>
            Какой-то текст
        </StyledBtn>
      </div>
  )
}

const StyledBtn = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: brown;
  padding: 10px 20px;
  border-radius: 5px;
  color: #242424;
`
