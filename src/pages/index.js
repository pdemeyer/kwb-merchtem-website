import * as React from "react"
import Layout from "../components/cards/layout";
import LaatsteNieuwsOverzicht from "../components/laatstenieuws";
import MaandelijksNieuws from "../components/maandelijksnieuws";
import ContactZoeker from "../components/contactzoeker";
import AlgemeenKwbComponent from "../components/algemeenkwb-component";
import DebugLogger from "../components/debug-logger";
import Seo from "../components/seo";


const IndexPage = () => {
  return (
    <Layout showLogo="1" pageTitle="kwb Merchtem. Beleef meer.">
      <LaatsteNieuwsOverzicht />
      <MaandelijksNieuws />
      <ContactZoeker />
      <AlgemeenKwbComponent />
      <DebugLogger />
    </Layout>
  );
}


export const Head = () => <Seo title="Home Page" />

export default IndexPage
