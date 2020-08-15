import styled from "styled-components";
import { themeFonts, themeColors } from "../../shared/theme";
import { Flexbox } from "../Wrappers/FlexboxWrapper.style";

const { accent } = themeFonts;
const { darkBlue, yellow, offWhite } = themeColors;

export const AddNewForm = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  div > div:first-child {
    margin-left: 0;
  }
`;

export const FormGroup = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;

  label {
    color: ${darkBlue};
    font-size: 1.4rem;
  }
`;

export const Textarea = styled.textarea`
  margin-top: 16px;
  width: 100%;
  min-height: 6rem;
  border: none;
  // border-bottom: 1px solid ${darkBlue};
  background: none;
  font-family: ${accent};
  display: block;
  color: ${darkBlue};
  ::placeholder {
    color: ${darkBlue};
    opacity: 1;
    transition: 0.4s;
  }
  &:hover {
    ::placeholder {
      opacity: 0;
    }
  }
  &:focus {
    color: ${darkBlue};
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background: none;
  font-family: ${accent};
  display: block;
  margin-top: 24px;
  color: ${darkBlue};
  ::placeholder {
    color: ${darkBlue};
    opacity: 1;
    transition: 0.4s;
  }

  ::placeholder:after {
    content: "esfdrgty";
  }
  &:hover {
    ::placeholder {
      opacity: 0;
    }
  }
  &:focus {
    color: ${darkBlue};
    outline: none;
  }
`;

export const Button = styled.button`
  -webkit-appearance: none;
  background: none;
  border: none;
  border-bottom: 2px solid ${darkBlue};
  color: ${darkBlue};
  padding: 4px 0;
  font-weight: 500;
  margin-top: 24px;
  &:focus {
    color: ${offWhite};
    border-bottom: 2px solid ${offWhite};
    outline: none;
  }
`;

export const StarsWrapper = styled(Flexbox)`
  margin-top: 16px;
`;

export const StarInputWrapper = styled.div`
  margin: 0 16px;
  border: 1px solid red;
  position: relative;
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
