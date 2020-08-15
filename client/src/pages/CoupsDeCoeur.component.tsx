import React, { useState } from "react";
import { AddNew } from "../components/AddNew/AddNew.component";
import { SuccessScreen } from "../components/Success/SuccessScreen.component";
import { All } from "../components/All/All.component";
import { Favorites } from "../components/Favorites/Favorites.component";

export const CoupsDeCoeur = () => {
  const [showSection, setShowSection] = useState("all");

  const setSection = (section: string): void => {
    setShowSection(section);
  };

  const displaySection = (section: string) => {
    switch (section) {
      case "all":
        return <All setShowSection={setSection} currentSection={showSection} />;
      case "form":
        return <AddNew setShowSection={setSection} />;
      case "success":
        return <SuccessScreen setShowSection={setSection} />;
      case "favorites":
        return (
          <Favorites setShowSection={setSection} currentSection={showSection} />
        );
      case "error":
        return <p>error</p>;
      default:
        return <All setShowSection={setSection} currentSection={showSection} />;
    }
  };

  return displaySection(showSection);
};
