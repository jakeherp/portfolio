import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import Container from 'Atoms/Container';
import Post from 'Molecules/Post';
import SEO from 'Molecules/Seo';

interface IProps {
  data: {
    allContentfulItem: {
      edges: {
        node: {
          title: string;
          slug: string;
          image: {
            fluid: any;
          };
          type: string;
        };
      }[];
    };
  };
}

const Portfolio = ({ data }: IProps) => {
  const posts = data.allContentfulItem.edges;

  return (
    <>
      <SEO title="Portfolio" />
      <Container>
        <h2>Portfolio</h2>
        <Grid>
          {posts.map(({ node: { title, slug, image, type } }) => (
            <Post data={{ title, slug, image, type }} key={slug} />
          ))}
        </Grid>
        <Centered>
          This is a small selection of the hundreds of projects I worked on.
          <br />
          Want to see more?{' '}
          <Link to="/contact/">
            <strong>Get in touch</strong>
          </Link>{' '}
          and let me know what you're looking for, so I can send you a more
          comprehensive portfolio.
        </Centered>
      </Container>
    </>
  );
};

export default Portfolio;

const Centered = styled.p`
  margin-top: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

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
          image: featured_image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
