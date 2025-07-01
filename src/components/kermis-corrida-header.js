
import ListCol2Item from "./list-col-2-item";
import * as React from "react";
import PageListSection from "./pagelistsection";

import VisualDisplay from "./visual-display";

import corridaAffiche from "../images/affiche_corrida_2025.jpeg";
import kermisAffiche from "../images/affiche_kermis_2025.jpeg";
import FullWidthContainer from "./fullwidth-container";

const kermisAltName = "Kermis 2025";
const corridaAltName = "Corrida 2025";

const KermisCorridaHeader = ({showSectionTitle}) => {
  if (showSectionTitle) {
  return (
    <FullWidthContainer>
      <PageListSection sectionTitle={"Kermis en Corrida 2025"}  >
        <ListCol2Item >
          <VisualDisplay linkTo="/corrida" imgUrl={corridaAffiche} altName={corridaAltName} />
        </ListCol2Item>
        <ListCol2Item >
          <div>
            <h3>Corrida vrijdag 15/08/2025</h3>
            <p>De Corrida is een hardloopwedstrijd die plaatsvindt op vrijdagavond, 15 augustus 2025. 
              Deelnemers kunnen zich <a href="/corrida#inschrijven">inschrijven</a> voor <a href="/corrida#uurschema">verschillende afstanden</a> en genieten van een feestelijke sfeer met muziek en entertainment.</p>
            <p>Meer informatie over de Corrida vind je op de <a href="/corrida">Corrida pagina</a>.</p>
          </div>
        </ListCol2Item>
        <ListCol2Item  >
          <VisualDisplay linkTo="/kermis" imgUrl={kermisAffiche} altName={kermisAltName} />
        </ListCol2Item>
      </PageListSection>
    </FullWidthContainer>
  )
}
else {
  return (
    <FullWidthContainer>
      <PageListSection>
        <ListCol2Item >
          <VisualDisplay linkTo="/corrida" imgUrl={corridaAffiche} altName={corridaAltName} />
        </ListCol2Item>
        <ListCol2Item >
          <VisualDisplay linkTo="/kermis" imgUrl={kermisAffiche} altName={kermisAltName} />
        </ListCol2Item>
      </PageListSection>
    </FullWidthContainer>
  )
}};

export default KermisCorridaHeader;
