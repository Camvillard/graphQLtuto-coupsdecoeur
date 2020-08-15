import React from "react";
import { formatDate } from "../../utils/formatDate";
import { RegularText } from "../Text/Text.style";
import { CoupDeCoeurWrapper, Separator } from "./CoupDeCoeur.style";
import { IconStar } from "../Icons/IconStar.component";
import { Flexbox } from "../Wrappers/FlexboxWrapper.style";
import { IconSave } from "../Icons/IconSave.component";
import { gql, useMutation } from "@apollo/client";

type CoupDeCoeurProps = {
  data: any;
  index: number;
};

const ADD_TO_FAVORITE = gql`
  mutation addToFavorites($id: ID!) {
    addToFavorites(id: $id) {
      success
      coupDeCoeur {
        content
        id
      }
    }
  }
`;

export const CoupDeCoeur = (props: CoupDeCoeurProps) => {
  const { data } = props;
  const { content, rating, createdAt, isFavorite, id } = data;

  const [addToFavorites] = useMutation(ADD_TO_FAVORITE, { variables: { id } });

  const saveCoupDeCoeur = async () => {
    return addToFavorites();
  };

  return (
    <CoupDeCoeurWrapper>
      <RegularText accent size={"S"}>
        {formatDate(createdAt)}
      </RegularText>
      <RegularText accent>{content}</RegularText>
      <Separator />
      <Flexbox justify={"space-between"} align={"center"}>
        <Flexbox justify={"flex-start"} align={"center"}>
          {new Array(rating).fill(0, 0, rating).map((_a, index) => (
            <IconStar key={index} size={"S"} />
          ))}
        </Flexbox>
        <IconSave
          size={"S"}
          isFavorite={isFavorite}
          onIconClick={saveCoupDeCoeur}
        />
      </Flexbox>
    </CoupDeCoeurWrapper>
  );
};
