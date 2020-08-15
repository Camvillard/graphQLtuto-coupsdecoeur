import React from "react";
import { IconProps, Icon } from "./Icon.component";

export const IconBack = (props: IconProps) => {
  const { background, size, onIconClick } = props;
  return (
    <Icon background={background} size={size} onClick={onIconClick}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5H10M1 5L5 9M1 5L5 1"
          stroke="#FFFCF5"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};
