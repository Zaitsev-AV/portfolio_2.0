import { Logo } from "@/components/logo";
import { Menu } from "@/components/menu";
import sc from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = sc.header`
  background-color: #463838;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
