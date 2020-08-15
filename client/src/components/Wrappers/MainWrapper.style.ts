import styled from "styled-components";
import { themeColors, themeBreakpoints } from "../../shared/theme";

const { yellow } = themeColors;
const { sm, md, lg, xlg } = themeBreakpoints;

export const MainWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${yellow};
`;

export const NarrowWrapper = styled.div`
  padding: 24px 0;
  width: 82%;
  margin: auto;
  @media (min-width: ${sm}) {
    width: 78%;
  }
  @media (min-width: ${md}) {
    width: 72%;
  }
  @media (min-width: ${lg}) {
    width: 64%;
  }
  @media (min-width: ${xlg}) {
    width: 54%;
  }
`;
