import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/cards/layout";
import FullWidthContainer from "../components/fullwidth-container";
import KookBoekReceptDetail from "../components/kookboek-recept-detail";

export default function ReceptDetailTemplate({ data, pageContext }) {
  const recept = pageContext.recept;
  return (
    
    <Layout showLogo="1" pageTitle="Kookboek. De bijbel voor de kwb-man.">
      <FullWidthContainer>
          <KookBoekReceptDetail title={recept.frontmatter.title} date={recept.frontmatter.date} 
          kok={recept.frontmatter.kok} foto={recept.frontmatter.foto} html={recept.html}
          tags={recept.frontmatter.tags} />
      </FullWidthContainer>
    </Layout>
  );
}
