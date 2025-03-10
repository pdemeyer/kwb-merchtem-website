import * as React from 'react'
import Seo from '../components/seo'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "contact" }
          itemtype: { eq: "voorpagina" }
        }
      }) {
    edges {
      node {
        id
        frontmatter {
          title
          pagetype
          itemtype
        }
        excerpt
        html
        timeToRead
      }
    }
  }
}
`


const renderContactPage = (data) => {
  return (
    <div>
      {data.data.allMarkdownRemark.edges.map(({ node }) => (
      renderContactNode(node)
    ))}
    </div>
  )
}


const renderContactNode = (data) => {
  console.log(data)
  const { frontmatter, html, timeToRead, excerpt } = data
  console.log(frontmatter.title)
  return (
  <div>
    <h1>{frontmatter.title}</h1>
    <small>Time to read: {timeToRead} min.</small>
    <p>{excerpt}</p>
    <p>{frontmatter.date}</p>
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
  )
}

const ContactPage = ({ data }) => (
  <div>
    {renderContactPage({ data })}
  </div>
)


{/*
  return (
    <Layout pageTitle="Wat is KWB Merchtem?">
    <div class="content-centerer">
      <div class="fullwidth-item">
      <p>Sommigen omschrijven het als een jeugdbeweging voor volwassen mannen, 
        anderen houden het op een vereniging die het sociaal-culturele wil bevorderen. 
        En beide hebben ze gelijk: we zijn een sociale organisatie die activiteiten op het touw
        zet waarbij we aan alle leden een breed aanbod geven. Dat gaat van samen iets gaan drinken
        over een kaartje leggen, maandelijkse kooklessen, pingpong-avonden, darts-avonden, winterwandelingen,
        een kermis-3-daagse, een fietsweekend, een gezinsweekend, ... en nog veel meer.</p>
        <p>

        </p>
        </div>
        </div>
    </Layout>
  )
    */}


export const Head = () => <Seo title="About Me" />

export default ContactPage
