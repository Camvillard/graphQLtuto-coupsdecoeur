import styled, { css } from "styled-components";
import { themeColors, themeFonts } from "../../shared/theme";

const { darkBlue } = themeColors;
const { header } = themeFonts;

type TitleProps = {
  lined?: boolean;
};

export const MainTitle = styled.div<TitleProps>`
  color: ${darkBlue};
  font-family: ${header};
  font-weight: 700;
  font-size: 5.6rem;
  ${(props) =>
    props.lined &&
    css`
      padding-bottom: 8px;
      margin-bottom: 8px;
      border-bottom: 3px solid ${darkBlue};
    `}
`;
