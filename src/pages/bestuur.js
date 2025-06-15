import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import BestuurPagina from "../components/bestuur-pagina";

const BestuurPage = () => {
  return (
    <Layout pageTitle="Bestuur KWB Merchtem.">
      <BestuurPagina />
    </Layout>
  )
}

export const Head = () => <Seo title="kwb Bestuur" />

export default BestuurPage

