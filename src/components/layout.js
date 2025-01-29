import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import NavBar from "./NavBar";
import Footer from './footer'

import "../style/mystyles.sass"

import useSiteMetadata from "./SiteMetadata";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {

  const { title, description } = useSiteMetadata();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="body-v3">
       <NavBar/>
      <main className="pages-wrapper">
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout