import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from "gatsby"
import KleineRakenPaginaComponent from '../components/page-components/kleine-raken-pagina-component';

const KleineRakenPage = () => {
  return (
    <Layout pageTitle="Kleine raak. Het maandblad.">
      <KleineRakenPaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="Kleine Raak" />

export default KleineRakenPage