import { CSSProperties } from "react";

import { EFontSize, EFontWeight, Typography } from "@/components/ui/typography";
import styled from "styled-components";

// interface Props {
//
// };
export const Cards = () => {
  return (
    <Box>
      <Container>
        <img
          alt={"Кекс"}
          height={200}
          src={
            "https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg?w=740&t=st=1700054207~exp=1700054807~hmac=adc55d115e23b1749e29957ed909cf1d22388ce095899fb0591a4076b96f9103"
          }
          style={{ borderRadius: "10px" }}
          width={200}
        />
      </Container>
      <Container margin={"13px"}>
        <Typography
          color={"#0c0c0c"}
          fontSize={EFontSize.ExtraLarge}
          fontWeight={EFontWeight.Bold}
        >
          Какой-то тайтл у этой карточки
        </Typography>
      </Container>
      <Container margin={"10px"}>
        <Typography
          color={"#0c0c0c"}
          fontSize={EFontSize.Medium}
          fontWeight={EFontWeight.Light}
        >
          Text Text Text Text Text Text Text Text Text Tex tText
        </Typography>
      </Container>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button bgColor={"#144dbe"}>
          {" "}
          <Typography color={"#fff"} fontSize={EFontSize.Regular}>
            {" "}
            Added{" "}
          </Typography>
        </Button>
        <Button bgColor={"#ffffff"} border>
          {" "}
          <Typography color={"#144dbe"} fontSize={EFontSize.Regular}>
            {" "}
            Delete{" "}
          </Typography>
        </Button>
      </div>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  min-height: 300px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 1px 2px 16px #e3e1e1;
`;

interface IButtonProps {
  bgColor?: string;
  border?: boolean;
  color?: CSSProperties["color"];
}

const Button = styled.button<IButtonProps>`
  width: 90px;
  height: 40px;
  border-radius: 10px;
  border: ${(props) => (props.border ? "2px solid #144dbe" : "none")};
  background-color: ${(props) => props.bgColor || "blue"};
  color: ${(props) => props.color};
  //border-color: ;
  &:active {
    border: 3px solid #578cf5;
  }
`;

const Container = styled.div<{ margin?: string }>`
  margin: ${(props) => props.margin || 0};
`;
