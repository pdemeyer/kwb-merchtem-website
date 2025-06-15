import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import KermisPagina from "../components/kermis-pagina";
import KermisCorridaHeader from '../components/kermis-corrida-header';


const KermisPage = () => {
  return (
    <Layout pageTitle="Kermis KWB Merchtem.">
      <KermisCorridaHeader />
      <KermisPagina />
    </Layout>
  )
}

export const Head = () => <Seo title="Kermis & Corrida" />

export default KermisPage