import * as React from 'react'
import Layout from '../components/layout'
import MaandelijksNieuws from '../components/maandelijksnieuws'
import ContactZoeker from '../components/contactzoeker'
import KermisCorridaHeader from '../components/kermis-corrida-header'
import Seo from '../components/seo'
import LaatsteNieuwsOverzicht from '../components/laatstenieuws'
import AlgemeenKwbComponent from '../components/algemeenkwb-component'

const IndexPage = () => {
  return (
    <Layout showLogo="1" pageTitle="kwb Merchtem. Beleef meer.">
      <LaatsteNieuwsOverzicht  />
      <KermisCorridaHeader showSectionTitle="1" />
      <MaandelijksNieuws />
      <ContactZoeker />
      <AlgemeenKwbComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage