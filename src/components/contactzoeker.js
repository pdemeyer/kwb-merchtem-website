import * as React from "react";
import PageListSection from "./pagelistsection";
import FullWidthContainer from "./fullwidth-container";
import { Card, Typography } from "@material-tailwind/react";
import { HorizontalCard } from "./horizontal-card";
import { Link } from "gatsby";
 
const ContactZoeker = () => {
  return (
      <FullWidthContainer title={"Ons contacteren?"}>
        <HorizontalCard contentTitle={"Lid worden van KWB Merchtem?"} linkText="Lees meer" linkUrl="#" >
          <Typography variant="h6" color="gray">
            Wens je lid te worden van KWB Merchtem? Laat het ons weten via een mailtje. 
            Stuur een mail naar <Link to='mailto:lid@kwbmerchtem.be'>lid@kwbmerchtem.be</Link> en ontvang onze nieuwsbrief.
            </Typography>
        </HorizontalCard>
        
        <HorizontalCard contentTitle={"Familienieuws melden"} linkText="Lees meer" linkUrl="#">
          <Typography variant="h6" color="gray">
          De familie van de KWB-er is al vele jaren een belangrijk gegeven binnen onze KWB. Een geboorte, huwelijk, overlijden, communie,... Wij willen er graag aandacht aan besteden.
        Jammer genoeg zijn we vaak niet op de hoogte van dit familienieuws. Je mag het ons steeds laten weten via <Link to="mailto:  familienieuws@kwbmerchtem.be">Deze link</Link> 
        Meestal publiceren we dat familienieuws ook in ons ledenblad "de kleine raak". Indien je dat niet wenst, laat het ons dan ook weten.
            </Typography>
        </HorizontalCard>
      </FullWidthContainer>
  );  
};

export default ContactZoeker;
