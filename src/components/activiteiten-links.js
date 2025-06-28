import * as React from "react";
import { graphql, StaticQuery } from "gatsby"
import ActiviteitLink from "./activiteit-link";

const ActiviteitenLinks = ({activiteiten}) => (
   <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
            sort: { frontmatter: {date: ASC }}
            filter: { 
                     frontmatter: { 
                        pagetype: { eq: "activiteiten" }
                      }
                }
            limit: 5
      ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                date(formatString: "DD/MM/YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h3>Komende activiteiten</h3>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              <ActiviteitLink slug={`/activiteiten/${node.frontmatter.slug}`}
                title={node.frontmatter.title} date={node.frontmatter.date} ></ActiviteitLink>
              {/*
              <ActiviteitLink key={node.id} activiteit={node} />
              <p>{node.frontmatter.date}</p>
              
              {node.frontmatter.date} || {node.frontmatter.title} 
              </a>
              <a href={`/activiteiten/${node.frontmatter.title.replace(/\s+/g, '-').toLowerCase()}`}>

              
              <a href={`/activiteiten/${node.frontmatter.title.replace(/\s+/g, '-').toLowerCase()}`}>


              <p>{node.excerpt}</p>
              */}
            </li>
          ))}
        </ul>
      </div>
    )}
  />

   );

export default ActiviteitenLinks;
