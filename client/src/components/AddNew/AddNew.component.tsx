import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { NarrowWrapper } from "../Wrappers/MainWrapper.style";
import { MainTitle } from "../Titles/Titles.style";
import {
  AddNewForm,
  Button,
  Textarea,
  FormGroup,
  StarsWrapper,
} from "./AddNew.style";
import { FlexboxWrapper } from "../Wrappers/FlexboxWrapper.style";
import { IconStar } from "../Icons/IconStar.component";
import { themeColors } from "../../shared/theme";
import { FormError } from "../Errors/FormError.component";

const RATINGS = [1, 2, 3, 4, 5];
const { darkBlue } = themeColors;

const ADD_NEW = gql`
  mutation addCoupdCoeur($content: String!, $rating: Int) {
    createCoupDeCoeur(content: $content, rating: $rating) {
      success
      coupDeCoeur {
        content
        rating
        createdAt
      }
    }
  }
`;

export const AddNew = (props: any) => {
  const [content, setContent] = useState<string | undefined>(undefined);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [formError, setFormError] = useState({ status: false, message: "" });

  const [addCoupdCoeur] = useMutation(ADD_NEW, {
    variables: { content, rating },
  });

  const submit = async () => {
    if (content && rating) {
      return addCoupdCoeur().then((response) => {
        return response.data.createCoupDeCoeur.success
          ? props.setShowSection("success")
          : props.setShowSection("error");
      });
    } else {
      setFormError({ status: true, message: "form needs to be completed!" });
    }
  };

  const closeMessage = () => {
    setFormError({ status: false, message: "" });
  };

  return (
    <FlexboxWrapper justify={"center"} align={"center"}>
      <NarrowWrapper>
        <MainTitle as={"h1"}>what made you smile today ?</MainTitle>
        <AddNewForm>
          <FormGroup>
            <label htmlFor="">
              it can be from the cheesecake you ate to the million you won at
              the lotery.
            </label>
            <Textarea
              placeholder={"today |"}
              onChange={(e) => setContent(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="">
              adding a rating will help you choose the best one to brag about on
              fridays daily stand-up even if it's not the purpose.
            </label>
            <StarsWrapper justify={"flex-start"} align={"center"}>
              {RATINGS.map((r) => (
                <IconStar
                  key={r}
                  onIconClick={() => setRating(r)}
                  size={"S"}
                  color={rating && rating >= r ? darkBlue : ""}
                />
              ))}
            </StarsWrapper>
          </FormGroup>
          <Button onClick={submit}>submit coup de coeur</Button>
        </AddNewForm>
      </NarrowWrapper>
      {formError.status && (
        <FormError message={formError.message} onClick={closeMessage} />
      )}
    </FlexboxWrapper>
  );
};
