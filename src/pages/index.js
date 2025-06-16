import * as React from 'react'
import Layout from '../components/layout'
import LaatsteUpdates from '../components/laatsteupdates'
import MaandelijksNieuws from '../components/maandelijksnieuws'
import ContactZoeker from '../components/contactzoeker'
import AlgemeenKWB from '../components/algemeenkwb'
import KermisCorridaHeader from '../components/kermis-corrida-header'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <Layout showLogo="1" pageTitle="kwb Merchtem. Beleef meer.">
      <LaatsteUpdates />
      <KermisCorridaHeader />
      <MaandelijksNieuws />
      <ContactZoeker />
      <AlgemeenKWB />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage