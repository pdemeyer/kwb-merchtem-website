import KomendeActiviteitenList from "./komende-activiteiten-list";
import VoorbijeActiviteitenList from "./voorbije-activiteiten-list";
import ListCol2Item from "./list-col-2-item";
import * as React from "react";
import PageListSection from "./pagelistsection";
import FullWidthContainer from "./fullwidth-container";
import LaatsteNieuwsList from "./laatste-nieuws-list";

const LaatsteNieuwsOverzicht = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-screen-xl mx-auto">
         <KomendeActiviteitenList showTitle={true} />
          <VoorbijeActiviteitenList showTitle={true} />
          <LaatsteNieuwsList showTitle={true} />
        </div>
  );
};

export default LaatsteNieuwsOverzicht;
