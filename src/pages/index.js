import * as React from "react"
import { NavbarDark } from "../components/navbar-dark";

import { ThemeProvider, Button } from "@material-tailwind/react";
import Layout from "../components/layout";
import LaatsteNieuwsOverzicht from "../components/laatstenieuws";
import KermisCorridaHeader from "../components/kermis-corrida-header";
import MaandelijksNieuws from "../components/maandelijksnieuws";
import ContactZoeker from "../components/contactzoeker";
import AlgemeenKwbComponent from "../components/algemeenkwb-component";
import Seo from "../components/seo";


const IndexPage = () => {
  return (
    <Layout showLogo="1" pageTitle="kwb Merchtem. Beleef meer.">
      <LaatsteNieuwsOverzicht />
      <KermisCorridaHeader showSectionTitle="1" />
      <MaandelijksNieuws />
      <ContactZoeker />
      <AlgemeenKwbComponent />
    </Layout>
  );
}


export const Head = () => <Seo title="Home Page" />

export default IndexPage