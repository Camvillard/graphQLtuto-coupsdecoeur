import React from "react";
import { formatDate } from "../../utils/formatDate";
import { RegularText } from "../Text/Text.style";
import { CoupDeCoeurWrapper, Separator } from "./CoupDeCoeur.style";
import { IconStar } from "../Icons/IconStar.component";
import { Flexbox } from "../Wrappers/FlexboxWrapper.style";
type CoupDeCoeurProps = {
  data: any;
  index: number;
};
export const CoupDeCoeur = (props: CoupDeCoeurProps) => {
  const { data } = props;
  const { content, rating, createdAt } = data;

  return (
    <CoupDeCoeurWrapper>
      <RegularText accent size={"S"}>
        {formatDate(createdAt)}
      </RegularText>
      <RegularText accent>{content}</RegularText>
      <Separator />
      <Flexbox justify={"flex-start"} align={"center"}>
        {new Array(rating).fill(0, 0, rating).map((_a, index) => (
          <IconStar key={index} size={"S"} />
        ))}
      </Flexbox>
    </CoupDeCoeurWrapper>
  );
};
