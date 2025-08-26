import * as React from "react";
import Seo from './seo'
import { graphql, StaticQuery } from "gatsby"
import FullWidthContainer from "./fullwidth-container";
import { HorizontalCard } from "./cards/horizontal-card";

const MaandelijksNieuws = () => (
   <StaticQuery
         query={graphql`
           query {
             allMarkdownRemark(
                       filter: { 
                          frontmatter: { 
                             pagetype: { eq: "kr" } }
                          },
                       sort:  [ { frontmatter: {jaar: DESC} },
                                { frontmatter: {maand: DESC} } ],
                       limit: 1
               ) {
               edges {
                 node {
                   id
                   frontmatter {
                     title
                     jaar
                     maand
                   }
                   excerpt
                 }
               }
             }
           }
         `}
         render={data => (
    <FullWidthContainer isBgFilled={true}>
      {data.allMarkdownRemark.edges.map(({ node }) => (

        <HorizontalCard 
          cardHeaderTitle="Ons maandblad: de Kleine Raak" 
          contentTitle="Maandelijks Nieuws" 
          imgUrl={`/media/kr/${node.frontmatter.jaar}/${node.frontmatter.maand}/kr-${node.frontmatter.jaar}${node.frontmatter.maand}.png`}
          linkUrl="/kleine-raken"
          linkText={"Download" }
          className="h-50"
        />
        ))}

        <HorizontalCard 
          cardHeaderTitle="Kalender 2025-2026"
          contentTitle="Volledige kalender om te downloaden"
          imgUrl="/media/kalender/2025-kalender-maand-per-maand.jpg"
          linkUrl="/media/kalender/2025-kalender-maand-per-maand.pdf"
          linkText={"Download" }  
          className="h-50"
        />

    </FullWidthContainer>
   )}
    />
  );

export const Head = () => <Seo title="Maandelijks nieuws" />

export default MaandelijksNieuws;
