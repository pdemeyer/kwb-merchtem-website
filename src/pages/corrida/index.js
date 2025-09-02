import * as React from 'react'
import Layout from '../../components/cards/layout'
import Seo from '../../components/seo'
import CorridaPaginaComponent from "../../components/page-components/corrida-pagina-component";
import KermisCorridaHeader from '../../components/kermis-corrida-header';

const IndexPage = () => {
  return (
    <Layout pageTitle="Corrida KWB Merchtem.">
      <KermisCorridaHeader />
      <CorridaPaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="Kermis & Corrida" />

export default IndexPage