import styled from "styled-components";
import {Logo} from "@/components/logo";
import {Menu} from "@/components/menu";

export const Header = () => {
  return (
    <StyledHeader>
     <Logo/>
     <Menu/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #463838;
`