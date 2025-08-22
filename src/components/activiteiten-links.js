import * as React from "react";
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

import ActiviteitLink from "./activiteit-link";

const ActiviteitenLinks = ({activiteiten, titel, showTitle}) => {
  return (
      <Card className="mt-6 w-96 rounded-lg hover:shadow-lg">
      <CardHeader className="relative h-64">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h2" color="blue-gray" className="mb-2"> {titel} </Typography>
        <Typography>
        <List>
          {activiteiten.map(({ node }) => (
            <ListItem key={node.id}>
              <ActiviteitLink slug={node.frontmatter.slug}
                title={node.frontmatter.title} date={node.frontmatter.date} ></ActiviteitLink>
            </ListItem>
          ))}
        </List>
        </Typography>
        </CardBody>
      <CardFooter className="pt-0">
        <Button variant="text" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Alle {titel}</Button>
      </CardFooter>
    </Card>
      );
    }

export default ActiviteitenLinks;

// { showTitle && <Typography variant="h3" color="blue-gray" className="mb-2"> {titel} </Typography> }
