import * as React from "react";
import {
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";

import ActiviteitLink from "./activiteit-link";
import VerticalCard3 from "./cards/vertical-card-3";


const ActiviteitenLinks = ({activiteiten, titel, showTitle, imgUrl, buttonUrl}) => {
  return (
    <VerticalCard3 imgUrl={imgUrl} buttonText={`Alle ${titel}`} buttonUrl={buttonUrl}>   
      { showTitle && <Typography variant="h3"> {titel} </Typography> }
      {activiteiten.length === 0 ? (  
        <Typography>
          Er zijn momenteel geen {titel.toLowerCase()} beschikbaar.
        </Typography>
      ):
      (
        <section>
        <List>
          {activiteiten.map(({ node }) => (
            <ListItem key={node.id}>
              <ActiviteitLink slug={node.frontmatter.slug}
                title={node.frontmatter.title} date={node.frontmatter.date} ></ActiviteitLink>
            </ListItem>
          ))}
        </List>
        </section>
      ) }
      </VerticalCard3>
      );
    }

export default ActiviteitenLinks;

