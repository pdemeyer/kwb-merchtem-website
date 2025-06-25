import KomendeActiviteiten from "./komende-activiteiten-list";
import VoorbijeActiviteiten from "./voorbije-activiteiten";
import ListCol2Item from "./list-col-2-item";
import * as React from "react";
import PageListSection from "./pagelistsection";

const LaatsteUpdates = () => {
  return (
    <PageListSection sectionTitle={"Laatste updates"}>
      <ListCol2Item section="/activiteiten" >
        <KomendeActiviteiten />
      </ListCol2Item>
      <ListCol2Item section="/activiteiten" >
        <VoorbijeActiviteiten />
      </ListCol2Item>
    </PageListSection>
  );
};

export default LaatsteUpdates;
