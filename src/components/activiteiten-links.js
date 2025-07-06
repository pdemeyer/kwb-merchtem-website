import * as React from "react";
import ActiviteitLink from "./activiteit-link";

const ActiviteitenLinks = ({activiteiten, titel, showTitle}) => {
  return (
      <div>
        { showTitle && <h3>{titel}</h3> }
        <ul>
          {activiteiten.map(({ node }) => (
            <li key={node.id}>
              <ActiviteitLink slug={node.frontmatter.slug}
                title={node.frontmatter.title} date={node.frontmatter.date} ></ActiviteitLink>
            </li>
          ))}
        </ul>
      </div>
      );
    }

export default ActiviteitenLinks;
