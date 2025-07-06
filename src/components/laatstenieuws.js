import KomendeActiviteitenList from "./komende-activiteiten-list";
import VoorbijeActiviteitenList from "./voorbije-activiteiten-list";
import ListCol2Item from "./list-col-2-item";
import * as React from "react";
import PageListSection from "./pagelistsection";
import FullWidthContainer from "./fullwidth-container";
import LaatsteNieuwsList from "./laatste-nieuws-list";

const LaatsteNieuwsOverzicht = () => {
  return (
    <FullWidthContainer>
      <PageListSection sectionTitle={"Laatste updates"}>
        <ListCol2Item section="/activiteiten" >
         <KomendeActiviteitenList />
       </ListCol2Item>
        <ListCol2Item section="/activiteiten" >
          <VoorbijeActiviteitenList />
        </ListCol2Item>
        <ListCol2Item section="/nieuws" >
          <LaatsteNieuwsList showTitle={true} />
        </ListCol2Item>
      </PageListSection>
    </FullWidthContainer>
  );
};

export default LaatsteNieuwsOverzicht;
