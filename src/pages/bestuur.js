import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import BestuurPagina from "../components/bestuur-pagina";
import FullWidthContainer from '../components/fullwidth-container';

const BestuurPage = () => {
  return (
    <Layout pageTitle="Bestuur KWB Merchtem.">
      <FullWidthContainer>
        <BestuurPagina />
      </FullWidthContainer>
    </Layout>
  )
}

export const Head = () => <Seo title="kwb Bestuur" />

export default BestuurPage

