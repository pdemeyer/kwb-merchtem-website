import * as React from "react";
import PageListSection from "./pagelistsection";
import FullWidthContainer from "./fullwidth-container";
import { useActiviteiten } from "../hooks/use-activiteiten";
import { Link } from "gatsby";

const ActiviteitenCardView = () => {
  const data = useActiviteiten();

  return (
    <FullWidthContainer>
      <PageListSection>
        <div className="columns is-multiline">
          { data &&
             data.map(({node : post}) => (
              <div className="is-parent column is-4" key={post.id}>
              <article key={post.id} className={`blog-list-item tile is-child box notification ${
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
                <footer className="card-footer">
                  <Link className="button" to={`/activiteiten/${post.frontmatter.slug}`}>Lees meer →</Link>
                  </footer>
                </article>
                </div>
             ))
            }
        </div>
      </PageListSection>
    </FullWidthContainer>
  );
};

export default ActiviteitenCardView;
