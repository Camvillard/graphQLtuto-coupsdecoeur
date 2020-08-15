import styled from "styled-components";
import { MainWrapper } from "./MainWrapper.style";

type FlexboxProps = {
  justify: string;
  align: string;
  direction?: string;
  margins?: string;
};

export const FlexboxWrapper = styled(MainWrapper)<FlexboxProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction || "row"};
`;

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction || "row"};
  ${(props) => props.margins && "margin:" + props.margins};
`;
