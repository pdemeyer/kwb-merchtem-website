import * as React from "react";
import ActiviteitenLinks from "./activiteiten-links";
import { useActiviteiten } from "../hooks/use-activiteiten";

const VoorbijeActiviteitenList = () => {
  const edges = useActiviteiten();
  if (!edges || edges.length === 0) {
    return <p>Er zijn momenteel geen voorbije activiteiten.</p>;
  }
   
  const currentDate = new Date();
  // Filter eerst voor voorbije activiteiten
  const voorbijeActiviteiten = edges
   .filter(({ node }) => {
     const activiteitDate = new Date(node.frontmatter.date);
     return activiteitDate < currentDate;
   })
   .slice(0, 5) // Beperk tot de laatste 5 voorbije activiteiten
   
  return <ActiviteitenLinks activiteiten={voorbijeActiviteiten} showTitle={true} titel="Voorbije activiteiten" imgUrl="/images/fietsrally.jpg" buttonUrl="/activiteiten" />
  }

export default VoorbijeActiviteitenList;
