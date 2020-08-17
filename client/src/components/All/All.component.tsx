import React from "react";
import { MainWrapper, NarrowWrapper } from "../Wrappers/MainWrapper.style";
import { gql, useQuery } from "@apollo/client";
import { MainTitle } from "../Titles/Titles.style";
import { CoupDeCoeur } from "../CoupDeCoeur/CoupDeCoeur.component";
import { AddNewButton } from "../AddNew/AddNewButton.component";
import { Filter } from "../Filter/Filter.component";

const GET_ALL = gql`
  query allCoupsDeCoeur {
    coupsDeCoeur {
      content
      rating
      createdAt
      isFavorite
      id
    }
  }
`;

type AllProps = {
  setShowSection: (setion: string) => void;
  currentSection: string;
};
export const All = ({ setShowSection, currentSection }: AllProps) => {
  const { loading, error, data } = useQuery(GET_ALL);
  return (
    <MainWrapper>
      <Filter
        onFilterClick={() => setShowSection("favorites")}
        currentSection={currentSection}
      />
      <NarrowWrapper>
        <MainTitle as={"h1"} margins={"24px 0 40px 0"}>
          your coups de coeur
        </MainTitle>
        {loading && <p>loading</p>}
        {error && <p>error</p>}
        {data &&
          data.coupsDeCoeur.map((cdc: any, index: number) => (
            <CoupDeCoeur key={index} data={cdc} index={index} />
          ))}
      </NarrowWrapper>
      <AddNewButton setSection={setShowSection} />
    </MainWrapper>
  );
};
