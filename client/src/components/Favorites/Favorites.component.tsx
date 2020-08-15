import React from "react";
import { MainWrapper, NarrowWrapper } from "../Wrappers/MainWrapper.style";
import { gql, useQuery } from "@apollo/client";
import { MainTitle } from "../Titles/Titles.style";
import { CoupDeCoeur } from "../CoupDeCoeur/CoupDeCoeur.component";
import { AddNewButton } from "../AddNew/AddNewButton.component";
import { Filter } from "../Filter/Filter.component";

const GET_FAVORITES = gql`
  query {
    allFavorites {
      content
      rating
      createdAt
    }
  }
`;

type FavoritesProps = {
  setShowSection: (setion: string) => void;
  currentSection: string;
};

export const Favorites = ({
  setShowSection,
  currentSection,
}: FavoritesProps) => {
  const { loading, error, data } = useQuery(GET_FAVORITES);

  return (
    <MainWrapper>
      <Filter
        onFilterClick={() => setShowSection("all")}
        currentSection={currentSection}
      />
      <NarrowWrapper>
        <MainTitle as={"h1"} margins={"24px 0 40px 0"}>
          your favorites
        </MainTitle>
        {loading && <p>loading</p>}
        {error && <p>error</p>}
        {data &&
          data.allFavorites.map((cdc: any, index: number) => (
            <CoupDeCoeur key={index} data={cdc} index={index} />
          ))}
      </NarrowWrapper>
      <AddNewButton setSection={setShowSection} />
    </MainWrapper>
  );
};
