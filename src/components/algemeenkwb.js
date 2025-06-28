import React from "react";
import PageListSection from "./pagelistsection";
import FullWidthContainer from "./fullwidth-container";

const AlgemeenKWB = () => {
  return (
    <PageListSection sectionTitle={"Wat is KWB Merchtem?"}>
      <FullWidthContainer>
              <p>
              Met de Kristelijke WerknemersBeweging van Merchtem bereiken we maandelijks 450 leden. 
              Dit kan gebeuren door een huisbezoek van de wijkmeester, door één van onze 265 activiteiten 
              of door een ontmoeting in ons KWB-lokaal "De Werkman" op zondagvoormiddag. In onze KWB
               is er voor elks wat wils. Er zijn zowel vormende als ontspannende activiteiten, 
               vaak gericht op gezinnen, soms alleen voor mannen.
              </p>
              <p>
              Bezoek onze activiteiten-kalender maar eens voor de komende activiteiten, of bekijk 
              enkele mooie foto's van de voorbije activiteiten.
              </p>
              <p>
                Meer info over de werking, het ledenblad "De Kleine Raak", bestuur, wijkmeesters, en 
                inschrijvingen kan je vinden bij info.
              </p>
      </FullWidthContainer>
    </PageListSection>
  );
};

export default AlgemeenKWB;
