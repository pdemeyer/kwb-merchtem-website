
import ListCol2Item from "./list-col-2-item";
import * as React from "react";
import PageListSection from "./pagelistsection";

import VisualDisplay from "./visual-display";

import corridaAffiche from "../images/affiche_corrida_2025.jpeg";
import kermisAffiche from "../images/affiche_kermis_2025.jpeg";

const kermisAltName = "Kermis 2025";
const corridaAltName = "Corrida 2025";

const KermisCorridaHeader = ({showSectionTitle}) => {
  if (showSectionTitle) {
  return (
    <PageListSection sectionTitle={"Kermis 2025"}  >
        <ListCol2Item section="/corrida" >
          <VisualDisplay imgUrl={corridaAffiche} altName={corridaAltName} />
        </ListCol2Item>
        <ListCol2Item section="/kermis" >
          <VisualDisplay imgUrl={kermisAffiche} altName={kermisAltName} />
        </ListCol2Item>
      </PageListSection>
  )
}
else {
  return (
    <PageListSection>
        <ListCol2Item section="/corrida" >
          <VisualDisplay imgUrl={corridaAffiche} altName={corridaAltName} />
        </ListCol2Item>
        <ListCol2Item section="/kermis" >
          <VisualDisplay imgUrl={kermisAffiche} altName={kermisAltName} />
        </ListCol2Item>
      </PageListSection>
  )
}};

export default KermisCorridaHeader;
