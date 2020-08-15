import React from "react";
import styled from "styled-components";
import { themeColors } from "../../shared/theme";

const { darkBlue, offWhite } = themeColors;

type FilterProps = {
  onFilterClick: () => void;
  currentSection: string;
};

const FilterWrapper = styled.p`
  position: fixed;
  top: 16px;
  right: 16px;
  background: ${darkBlue};
  color: ${offWhite};
  padding: 4px;
  border-radius: 4px;
  font-size: 1.2rem;
  text-transform: uppercase;
`;
export const Filter = ({ onFilterClick, currentSection }: FilterProps) => {
  return (
    <FilterWrapper onClick={onFilterClick}>
      show {currentSection === "all" ? "favorites" : "all"}
    </FilterWrapper>
  );
};
