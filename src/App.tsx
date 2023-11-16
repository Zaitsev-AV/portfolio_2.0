import styled from "styled-components";
import {Cards} from "@/components/ui/cards.tsx";

export function App() {
  return (
    <Box>
      <Cards/>
      {/*<StyledBtn fontSize='30px' variant='outline' active>Hello</StyledBtn>*/}
      {/*<StyledBtn color='blue' variant='primary'>Hello</StyledBtn>*/}
    </Box>
  )
}

// interface SupperButtonProps {
//   fontSize?: string
//   color?: string
//   variant?: 'outline' | 'primary'
//   active?: boolean
// }

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
`

// const StyledBtn = styled.button<SupperButtonProps>`
//   border: none;
//   border-radius: 14px;
//   //background-color: brown;
//   background-color: ${props => props.color || '#61942e'};
//   padding: 10px 20px;
//   font-size: ${props => props.fontSize || '25px'};
//   color: #242424;
//
//   ${props => props.variant === 'primary' && css<SupperButtonProps>`
//     background-color: ${props => props.color || '#61942e'};
//     color: #c92c2c;
//     &:hover {
//       background-color: transparent;
//     }
//   `}
//
//
//   ${props => props.variant === 'outline' && css<SupperButtonProps>`
//     color: ${props => props.color || '#61942e'};
//     border: 2px solid ${props => props.color || '#61942e'};
//     background-color: transparent;
//     &:hover {
//       background-color: chartreuse;
//     }
//   `}
//   ${props => props.active && css<SupperButtonProps> `
//     &:hover {
//       box-shadow: 5px 5px 5px 13px rgba(178, 94, 94, 0.25);
//     }
//   `}
//
//   ${props => props.active && css<SupperButtonProps> `
//     &:hover {
//       box-shadow: 5px 5px 5px 13px rgba(178, 94, 94, 0.25);
//     }
//   `}
// `



