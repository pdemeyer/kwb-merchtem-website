
import React from "react"
import { Link } from "gatsby"

const ActiviteitLink = ({key, slug, title, date }) => {
  // Format the date to a more readable format
  const activiteitDate = new Date(date).toLocaleDateString(("nl-BE"));

  return <div>
    <Link to={`/activiteiten/${slug}`}>
     {activiteitDate}  ||  {title} 
    </Link>
  </div>
}

export default ActiviteitLink