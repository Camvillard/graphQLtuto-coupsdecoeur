import styled from "styled-components";
import { themeColors } from "../../shared/theme";

const { offWhite } = themeColors;

export const CoupDeCoeurWrapper = styled.div`
  margin: 24px 0 48px;
`;

export const Separator = styled.hr`
  height: 1px;
  background: ${offWhite};
  margin-top: 16px;
  margin-bottom: 4px;
`;
