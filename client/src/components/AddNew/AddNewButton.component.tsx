import React from "react";
import styled from "styled-components";
import { themeColors } from "../../shared/theme";
import { IconPlus } from "../Icons/IconPlus.component";

const { darkBlue } = themeColors;

type AddNewButtonProps = {
  setSection: (section: string) => void;
};

const AddNewWrapper = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  svg {
    height: 18px;
    width: 18px;
  }
`;

export const AddNewButton = ({ setSection }: AddNewButtonProps) => {
  return (
    <AddNewWrapper>
      <IconPlus
        background={darkBlue}
        onIconClick={() => setSection("form")}
        size={"L"}
      />
    </AddNewWrapper>
  );
};
