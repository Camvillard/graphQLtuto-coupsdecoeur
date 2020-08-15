import React from "react";
import { IconProps, Icon } from "./Icon.component";

export const IconSave = (props: IconProps) => {
  const { background, size, margins, onIconClick } = props;
  return (
    <Icon
      background={background}
      size={size}
      onClick={onIconClick}
      margins={margins}
    >
      <svg
        width="12"
        height="16"
        viewBox="0 0 10 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.7 3C0.7 1.72975 1.72975 0.7 3 0.7H7C8.27026 0.7 9.3 1.72975 9.3 3V11.4945C9.3 12.1983 8.45671 12.5591 7.94762 12.0732L5.82857 10.0505C5.36486 9.60784 4.63514 9.60784 4.17143 10.0505L4.65476 10.5568L4.17143 10.0505L2.05238 12.0732C1.54329 12.5591 0.7 12.1983 0.7 11.4945V3Z"
          stroke="#FFFCF5"
          strokeWidth="1.4"
        />
      </svg>
    </Icon>
  );
};
