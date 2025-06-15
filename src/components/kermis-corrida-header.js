
import ListCol2Item from "./list-col-2-item";
import * as React from "react";
import PageListSection from "./pagelistsection";
import CorridaVisual from "./corrida-visual";
import KermisVisual from "./kermis-visual";

const KermisCorridaHeader = () => {
  return (
    <PageListSection > {/*sectionTitle={"Kermis 2025"}*/ }
        <ListCol2Item section="/corrida" >
          <CorridaVisual />
        </ListCol2Item>
        <ListCol2Item section="/kermis" >
          <KermisVisual />
        </ListCol2Item>
      </PageListSection>
  );
};

export default KermisCorridaHeader;
