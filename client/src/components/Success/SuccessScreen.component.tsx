import React from "react";
import { FlexboxWrapper, Flexbox } from "../Wrappers/FlexboxWrapper.style";
import { MainTitle } from "../Titles/Titles.style";
import { RegularText } from "../Text/Text.style";
import { IconBack } from "../Icons/IconBack.component";
import { IconPlus } from "../Icons/IconPlus.component";
import { themeColors } from "../../shared/theme";
import { NarrowWrapper } from "../Wrappers/MainWrapper.style";

const { darkBlue } = themeColors;

type SuccessScreenProps = {
  setShowSection: (section: string) => void;
};
export const SuccessScreen = (props: SuccessScreenProps) => {
  const { setShowSection } = props;
  return (
    <FlexboxWrapper direction={"column"} justify={"center"} align={"center"}>
      <NarrowWrapper>
        <Flexbox direction={"column"} justify={"center"} align={"center"}>
          <MainTitle as={"h1"} lined>
            fantastico!
          </MainTitle>
          <RegularText accent centered>
            see you tomorrow for another gratefulness moment.
          </RegularText>
          <Flexbox justify={"center"} align={"center"} margins={"8px 0 0"}>
            <IconBack
              background={darkBlue}
              size={"M"}
              onIconClick={() => setShowSection("all")}
            />
            <IconPlus
              background={darkBlue}
              size={"M"}
              onIconClick={() => setShowSection("form")}
            />
          </Flexbox>
        </Flexbox>
      </NarrowWrapper>
    </FlexboxWrapper>
  );
};
