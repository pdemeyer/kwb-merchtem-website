import KomendeActiviteitenList from "./komende-activiteiten-list";
import VoorbijeActiviteitenList from "./voorbije-activiteiten-list";
import * as React from "react";
import LaatsteNieuwsList from "./laatste-nieuws-list";

const LaatsteNieuwsOverzicht = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 pt-6 max-w-screen-xl mx-auto">
         <KomendeActiviteitenList showTitle={true} />
          <VoorbijeActiviteitenList showTitle={true} />
          <LaatsteNieuwsList showTitle={true} />
        </div>
  );
};

export default LaatsteNieuwsOverzicht;
