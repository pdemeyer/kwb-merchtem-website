import KomendeActiviteiten from "./komende-activiteiten-list";
import VoorbijeActiviteiten from "./voorbije-activiteiten";
import ListCol2Item from "./list-col-2-item";
import * as React from "react";
import PageListSection from "./pagelistsection";

const KleineRaken = ( {section, children}) => {
  return (
    <PageListSection sectionTitle={"Kleine Raken"}>
      <ListCol2Item section="/activiteiten" >
        <KleineRaak />
      </ListCol2Item>
    </PageListSection>
  );
};

export default KleineRaken;
