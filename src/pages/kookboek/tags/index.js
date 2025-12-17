import React from "react";
import { graphql, Link } from "gatsby";
import KookBoekTagCloudComponent from "../../../components/page-components/kookboek-tagcloud-component";
import Layout from "../../../components/cards/layout";
import Seo from "../../../components/seo";


const TagsPage = () => {
  return (
    <Layout showLogo={true} pageTitle="Kookboek. De bijbel voor de kwb-man.">
      <KookBoekTagCloudComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="Kookboek" />

export default TagsPage
