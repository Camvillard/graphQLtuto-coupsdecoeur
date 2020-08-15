import React from "react";
import styled, { keyframes } from "styled-components";
import { themeColors } from "../../shared/theme";

const { darkBlue, offWhite } = themeColors;

type FormErrorProps = {
  message: string;
  onClick: () => void;
};

const showWrapper = keyframes`
  0% {
    height: 32px;
    padding: 6px 8px 8px;
  }
  100% {
    height: 32px;
    padding: 6px 8px 8px;
    width: 200px;
  }
`;
const showMessage = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 200px;
  }
`;

const FormErrorWrapper = styled.div`
  width: 0;
  height: 0;
  overflow: hidden;
  position: fixed;
  bottom: 4vh;
  right: 0;
  background: ${darkBlue};
  border-radius: 4px 0 0 4px;
  animation: 0.3s ease-in 0s 1 normal forwards ${showWrapper};

  p {
    // animation: 1s ease-in 0s 1 normal forwards ${showMessage};
    overflow: hidden;
    color: ${offWhite};
    margin-bottom: 0;
  }
`;

export const FormError = ({ message, onClick }: FormErrorProps) => {
  return (
    <FormErrorWrapper onClick={onClick}>
      <p>{message}</p>
    </FormErrorWrapper>
  );
};
