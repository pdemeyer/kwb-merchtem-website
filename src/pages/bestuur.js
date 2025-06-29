import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import BestuurPaginaComponent from '../components/page-components/bestuur-pagina-component';

const BestuurPage = () => {
  return (
    <Layout pageTitle="Bestuur KWB Merchtem.">
        <BestuurPaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="kwb Bestuur" />

export default BestuurPage

