import sc from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href={""}>home</a>
        </li>
        <li>
          <a href={""}>skills</a>
        </li>
        <li>
          <a href={""}>works</a>
        </li>
        <li>
          <a href={""}>About</a>
        </li>
        <li>
          <a href={""}>contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = sc.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
