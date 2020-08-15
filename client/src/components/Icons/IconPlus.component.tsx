import React from "react";
import { IconProps, Icon } from "./Icon.component";

export const IconPlus = (props: IconProps) => {
  const { background, size, margins, onIconClick } = props;
  return (
    <Icon
      background={background}
      size={size}
      onClick={onIconClick}
      margins={margins}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1V13M13 7L1 7"
          stroke="#FFFCF5"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};
