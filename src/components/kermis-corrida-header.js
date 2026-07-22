
import ListCol2Item from "./list-col-2-item";
import * as React from "react";
import PageListSection from "./pagelistsection";

import VisualDisplay from "./visual-display";

import corridaAffiche from "../images/corrida-2026.jpeg";
import kermisAffiche from "../images/kermis-2026.jpeg";
import FullWidthContainer from "./fullwidth-container";

const kermisAltName = "Kermis 2026";
const corridaAltName = "Corrida 2026";

const KermisCorridaHeader = ({showSectionTitle}) => {
  if (showSectionTitle) {
  return (
    <FullWidthContainer>
      <PageListSection sectionTitle={"Kermis en Corrida 2026"}  >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-screen-xl mx-auto">
      <div className="w-full max-w-[96rem] flex-row">
          <VisualDisplay linkTo="/corrida" imgUrl={corridaAffiche} altName={corridaAltName} />
        </div>
        <div className="w-full max-w-[96rem] flex-row">
          <VisualDisplay linkTo="/kermis" imgUrl={kermisAffiche} altName={kermisAltName} />
        </div>
        </div>
      </PageListSection>
    </FullWidthContainer>
  )
}
else {
  return (
    <FullWidthContainer>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-screen-xl mx-auto">
      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[96rem] flex-row">
          <VisualDisplay linkTo="/corrida" imgUrl={corridaAffiche} altName={corridaAltName} />
        </div>
        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[96rem] flex-row">
          <VisualDisplay linkTo="/kermis" imgUrl={kermisAffiche} altName={kermisAltName} />
        </div>
        </div>
    </FullWidthContainer>
  )
}};

{/*
  
        <ListCol2Item >
          <VisualDisplay linkTo="/corrida" imgUrl={corridaAffiche} altName={corridaAltName} />
        </ListCol2Item>
        <ListCol2Item >
          <div>
            <h3>Corrida vrijdag 15/08: inschrijven</h3>
            <p>De Corrida is een hardloopwedstrijd die plaatsvindt op vrijdagavond, 14 augustus 2026. 
              Deelnemers kunnen zich <a href="/corrida#inschrijven">inschrijven</a> voor <a href="/corrida#uurschema">verschillende afstanden</a> en genieten van een feestelijke sfeer met muziek en entertainment.</p>
            <p>Meer informatie over de Corrida vind je op de <a href="/corrida">Corrida pagina</a>.</p>
          </div>
        </ListCol2Item>
        <ListCol2Item  >
          <VisualDisplay linkTo="/kermis" imgUrl={kermisAffiche} altName={kermisAltName} />
        </ListCol2Item>





        <ListCol2Item >
          <VisualDisplay linkTo="/corrida" imgUrl={corridaAffiche} altName={corridaAltName} />
        </ListCol2Item>
        <ListCol2Item >
          <VisualDisplay linkTo="/kermis" imgUrl={kermisAffiche} altName={kermisAltName} />
        </ListCol2Item>

  */}

export default KermisCorridaHeader;
