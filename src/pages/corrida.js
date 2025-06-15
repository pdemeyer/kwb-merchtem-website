import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import CorridaPagina from "../components/corrida-pagina";
import KermisCorridaHeader from '../components/kermis-corrida-header';


const CorridaPage = () => {
  return (
    <Layout pageTitle="Corrida KWB Merchtem.">
      <KermisCorridaHeader />
      <CorridaPagina />
    </Layout>
  )
}

export const Head = () => <Seo title="Kermis & Corrida" />

export default CorridaPage