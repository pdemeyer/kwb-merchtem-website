import KomendeActiviteitenList from "./komende-activiteiten-list";
import VoorbijeActiviteitenList from "./voorbije-activiteiten-list";
import ListCol2Item from "./list-col-2-item";
import * as React from "react";
import PageListSection from "./pagelistsection";
import FullWidthContainer from "./fullwidth-container";

const ActiviteitenOverzicht = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 max-w-screen-xl mx-auto">
         <KomendeActiviteitenList />
          <VoorbijeActiviteitenList />
    </div>
  );
};

export default ActiviteitenOverzicht;
