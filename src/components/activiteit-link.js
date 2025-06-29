
import React from "react"
import { Link } from "gatsby"

const ActiviteitLink = ({key, slug, title, date }) => (
  <div>
    <Link to={`/activiteiten/${slug}`}>
     {date}  ||  {title} 
    </Link>
  </div>
)

export default ActiviteitLink