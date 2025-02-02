import * as React from 'react'
import Layout from '../components/layout'
import LaatsteUpdates from '../components/laatsteupdates'
import MaandelijksNieuws from '../components/maandelijksnieuws'
import ContactZoeker from '../components/contactzoeker'
import AlgemeenKWB from '../components/algemeenkwb'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <Layout pageTitle="kwb Merchtem. Beleef meer.">
      <LaatsteUpdates></LaatsteUpdates>
      <MaandelijksNieuws></MaandelijksNieuws>
      <ContactZoeker></ContactZoeker>
      <AlgemeenKWB></AlgemeenKWB>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage