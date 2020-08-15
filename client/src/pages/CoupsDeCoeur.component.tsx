import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { CoupDeCoeur } from "../components/CoupDeCoeur/CoupDeCoeur.component";
import {
  MainWrapper,
  NarrowWrapper,
} from "../components/Wrappers/MainWrapper.style";
import { MainTitle } from "../components/Titles/Titles.style";
import { AddNew } from "../components/AddNew/AddNew.component";
import { SuccessScreen } from "../components/Success/SuccessScreen.component";
import { IconPlus } from "../components/Icons/IconPlus.component";
import { themeColors } from "../shared/theme";

const { darkBlue } = themeColors;

const GET_ALL = gql`
  query GetAllCoupsDeCoeur {
    coupsDeCoeur {
      content
      rating
      createdAt
    }
  }
`;

export const CoupsDeCoeur = () => {
  const [showSection, setShowSection] = useState("all");
  const { loading, error, data } = useQuery(GET_ALL);

  const setSection = (section: string): void => {
    setShowSection(section);
  };

  return (
    <>
      {showSection === "form" && <AddNew setShowSection={setSection} />}
      {showSection === "success" && (
        <SuccessScreen setShowSection={setSection} />
      )}
      {showSection === "error" && <p>error</p>}
      {showSection === "all" && (
        <MainWrapper>
          <NarrowWrapper>
            <MainTitle as={"h1"}>your coups de coeur</MainTitle>
            {loading && <p>loading</p>}
            {error && <p>error</p>}
            {data &&
              data.coupsDeCoeur.map((cdc: any, index: number) => (
                <CoupDeCoeur key={index} data={cdc} index={index} />
              ))}
          </NarrowWrapper>
          <IconPlus
            background={darkBlue}
            onIconClick={() => setSection("form")}
            size={"M"}
          />
        </MainWrapper>
      )}
    </>
  );
};
