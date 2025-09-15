
import React from "react"

import {
  Typography
} from "@material-tailwind/react";

import { Link } from "gatsby"

const ActiviteitLink = ({key, slug, title, date }) => {
  // Format the date to a more readable format
  const activiteitDate = new Date(date).toLocaleDateString(("nl-BE"));

  return <Typography
                  key={title}
                  as={Link}
                  to={`/activiteiten/${slug}`}
                  className="text-theme-link hover:text-theme-link-hover transition-colors font-medium"
                >
                  {activiteitDate}  ||  {title} 
                </Typography>
}

export default ActiviteitLink