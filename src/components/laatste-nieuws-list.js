import * as React from "react";
import { graphql, StaticQuery } from "gatsby"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  List,
  ListItem,
} from "@material-tailwind/react";

import ActiviteitenLinks from "./activiteiten-links";

const LaatsteNieuwsList = ({showTitle}) => (
   <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
            sort: { frontmatter: {date: DESC }}
            filter: { 
                     frontmatter: { 
                        pagetype: { eq: "nieuws" },
                      }
                }
      ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                date
                featureUntil
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => {
      const currentDate = new Date();
      
      const { edges } = data.allMarkdownRemark;

      const nieuwtjes = edges
      .filter(({ node }) => {
        if ( node.frontmatter.featureUntil) { 
          const featureUntilDate = new Date(node.frontmatter.featureUntil);
          return featureUntilDate >= currentDate;
        }
        else {
          return true; // Geen featureUntil betekent dat het altijd zichtbaar is
        }
      }
      )
      .slice(0, 5) // Beperk tot de 5 laatste nieuwtjes

      if (!nieuwtjes || nieuwtjes.length === 0) {
        return <Card className="mt-6 w-96 rounded-lg">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
        { showTitle && <Typography variant="h3" color="blue-gray" className="mb-2"> Nieuwtjes </Typography> }
        <Typography>
        Er zijn momenteel geen nieuwtjes beschikbaar.
        </Typography>
      <CardFooter className="pt-0">
        <Button variant="text" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Alle Nieuwtjes</Button>
      </CardFooter>
      </Card>      
      }
      
      return <ActiviteitenLinks activiteiten={nieuwtjes} titel="Nieuwtjes" showTitle={showTitle} />
    }
  }
  />
);

export default LaatsteNieuwsList;


/*
 
*/