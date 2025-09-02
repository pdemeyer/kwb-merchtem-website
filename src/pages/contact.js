import * as React from 'react'
import Seo from '../components/seo'
import ContactPaginaComponent from '../components/page-components/contact-pagina-component'
import Layout from '../components/cards/layout'

const ContactPage = () => {
  return (
    <Layout showLogo="1" pageTitle="Contacteer ons">
      <ContactPaginaComponent />
    </Layout>
  )
}
 
export const Head = () => <Seo title="Contacteer ons" />

export default ContactPage
