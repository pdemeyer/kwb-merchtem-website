import * as React from "react";
import PageListSection from "./pagelistsection";
import Seo from './seo'
import { graphql, StaticQuery } from "gatsby"

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

   <PageListSection sectionTitle={"Maandelijks Nieuws"}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
            <div class="list-col-2">
                <a href="/kleine-raken" class="post-picture-item">
                    <div class="post-text-box">
                      <div class="small-caps-text-copy">
                        <h3 class="post-item-title">Ons maandblad: de Kleine Raak</h3>
                       </div>
                       <div class="tile-heading-2 top-padding"> </div>
                      </div>
                     <div class="post-picture-picture">
                        <img alt={`kleine raak ${node.frontmatter.jaar}${node.frontmatter.maand}`} src={`/media/kr/${node.frontmatter.jaar}/${node.frontmatter.maand}/kr-${node.frontmatter.jaar}${node.frontmatter.maand}.png` }	
                        class="kleine-raak-small-image"/>
                     </div>
                  </a>
            </div>
            ))}
            <div class="list-col-2">
                <a href="/media/kalender/kalender-maand-per-maand.pdf" class="post-picture-item">
                <div class="post-text-box">
                      <div class="small-caps-text-copy">
                        <h3 class="post-item-title">Volledige kalender om te downloaden</h3>
                       </div>
                       <div class="tile-heading-2 top-padding"> </div>
                      </div>
                     <div class="post-picture-picture">
                        <img alt="kalender 2024-2025" src="/media/kalender/kalender-maand-per-maand.jpg"  class="kleine-raak-small-image"/>
                     </div>
                  </a>
            </div>
   </PageListSection>
   )}
    />
  
  );

export const Head = () => <Seo title="Maandelijks nieuws" />

export default MaandelijksNieuws;
