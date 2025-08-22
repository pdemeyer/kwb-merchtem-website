import * as React from "react";
import { useActiviteiten } from "../hooks/use-activiteiten";
import { Link } from "gatsby";

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

const ActiviteitenCardView = () => {
  const data = useActiviteiten();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-screen-xl mx-auto">
          { data &&
             data.map(({node : post}) => (
              <Card className="mt-6 w-96 rounded-lg hover:shadow-lg" key={post.id}>
              <CardBody key={post.id} className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}>
                <header className="card-header">
                  <p className="card-header-title">
                    </p>
                </header>
                <div className="card-content">
                  <p className="title is-4">{post.frontmatter.title}</p>
                  <p className="subtitle is-6">{post.frontmatter.date}</p>
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button to={`/activiteiten/${post.frontmatter.slug}`}>Lees meer →</Button>
                  </CardFooter>
                </Card>
             ))
            }
    </div>
  );
};

export default ActiviteitenCardView;
