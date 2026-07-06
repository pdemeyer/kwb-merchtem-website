import * as React from 'react'
import Layout from '../../components/cards/layout'
import Seo from '../../components/seo'
import KermisPaginaComponent from "../../components/page-components/kermis-pagina-component";
import KermisCorridaHeader from '../../components/kermis-corrida-header';


const KermisPage = () => {
  return (
    <Layout pageTitle="Kermis KWB Merchtem.">
      <KermisCorridaHeader />
      <KermisPaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="Kermis & Corrida" />

export default KermisPage
