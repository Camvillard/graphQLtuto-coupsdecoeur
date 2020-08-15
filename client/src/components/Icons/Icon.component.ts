import styled, { css } from "styled-components";

export type IconProps = {
  size: "S" | "M" | "L";
  background?: string;
  onIconClick?: () => void;
  color?: string;
  margins?: string;
};

export const Icon = styled.div<IconProps>`
  ${(props) => props.margins && "margin:" + props.margins};
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
      padding: 8px;
      border-radius: 50%;
    `}
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.size === "S" &&
    css`
      width: 18px;
      height: 18px;
    `}
  ${(props) =>
    props.size === "M" &&
    css`
      width: 32px;
      height: 32px;
    `}
  ${(props) =>
    props.size === "L" &&
    css`
      width: 64px;
      height: 64px;
    `}
`;
