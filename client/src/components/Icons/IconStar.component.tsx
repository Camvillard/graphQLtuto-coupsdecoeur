import React from "react";
import { Icon, IconProps } from "./Icon.component";
import { themeColors } from "../../shared/theme";

const { offWhite } = themeColors;

export const IconStar = (props: IconProps) => {
  const { background, size, color, onIconClick } = props;
  return (
    <Icon background={background} size={size} onClick={onIconClick}>
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.58407 1.09026C6.93384 0.292058 8.06616 0.292061 8.41593 1.09027L9.45466 3.4608C9.7462 4.12613 10.3756 4.58108 11.0988 4.64927L13.6846 4.89311C14.5588 4.97555 14.9099 6.06398 14.2487 6.64173L12.3237 8.32378C11.7712 8.80657 11.5274 9.55316 11.6885 10.269L12.2485 12.7574C12.4404 13.61 11.5231 14.2813 10.7685 13.8404L8.50892 12.5202C7.8856 12.1561 7.1144 12.1561 6.49108 12.5202L4.23152 13.8404C3.47688 14.2813 2.55955 13.61 2.75147 12.7574L3.31153 10.269C3.47265 9.55316 3.22885 8.80657 2.67632 8.32378L0.751306 6.64172C0.0901034 6.06397 0.441234 4.97555 1.31541 4.89311L3.90125 4.64927C4.62444 4.58108 5.2538 4.12613 5.54534 3.4608L6.58407 1.09026Z"
          fill={color || offWhite}
        />
      </svg>
    </Icon>
  );
};
