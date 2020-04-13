import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import SEO from 'Molecules/Seo';

const Portfolio = ({ data }: any) => {
  const posts = data.allContentfulItem.edges;

  return (
    <>
      <SEO title="Portfolio" />
      <div className="container" style={{ marginTop: '2rem' }}>
        <h2>
          Portfolio<span className="accent">.</span>
        </h2>
        <div className="wrapper">
          {posts.map(({ node }: any) => {
            const title = node.title || node.slug;
            return (
              <div key={node.slug} className="portfolio-item">
                <Link to={`/${node.slug}/`}>
                  <Img fluid={node.featured_image.fluid} />
                  <div className="overlay">
                    <h3>{title}</h3>
                    <small>{node.type}</small>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: `center`, marginTop: `2rem` }}>
          This is a small selection of the hundreds of projects I worked on.
          <br />
          Want to see more?{' '}
          <Link to="/contact/">
            <strong>Get in touch</strong>
          </Link>{' '}
          and let me know what you're looking for, so I can send you a more
          comprehensive portfolio.
        </p>
      </div>
    </>
  );
};

export default Portfolio;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulItem(sort: { fields: sortOrder, order: ASC }) {
      edges {
        node {
          title
          slug
          client
          type
          featured_image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
