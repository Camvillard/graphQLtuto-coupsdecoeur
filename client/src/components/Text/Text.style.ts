import styled, { css } from "styled-components";
import { themeFonts } from "../../shared/theme";

const { accent, body } = themeFonts;

type RegularTextProps = {
  accent?: boolean;
  size?: "S" | "M" | "L";
  centered?: boolean;
};

const fontSizes = {
  S: 1.2,
  M: 1.6,
  L: 1.8,
};

export const RegularText = styled.p<RegularTextProps>`
  font-family: ${(props) => (props.accent ? accent : body)};
  font-size: ${(props) => fontSizes[props.size || "M"]}rem;
  ${(props) => props.centered && "text-align:center;"}
`;
