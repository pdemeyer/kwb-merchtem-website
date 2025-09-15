import * as React from 'react'
import Layout from '../components/cards/layout'
import Seo from '../components/seo'
import BestuurPaginaComponent from '../components/page-components/bestuur-pagina-component';

const BestuurPage = () => {
  return (
    <Layout pageTitle="Bestuur KWB Merchtem." themeName="default">
        <BestuurPaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="kwb Bestuur" />

export default BestuurPage

