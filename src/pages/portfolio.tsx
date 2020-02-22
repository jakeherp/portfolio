import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Card } from '../components/molecules/Card';

import SEO from '../components/molecules/Seo';
import Container from '../components/atoms/Container';

const List = ({ match, history }) => {
  return (
    <StaticQuery
      query={graphql`
        query PortfolioItemQuery {
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
                    src
                  }
                }
                content {
                  json
                }
              }
            }
          }
        }
      `}
      render={data => (
        <CardList>
          {data.allContentfulItem.edges.map(({ node }: any) => (
            <Card
              key={node.slug}
              isSelected={match.params.id === node.slug}
              history={history}
              data={{
                title: node.title,
                slug: node.slug,
                client: node.client,
                category: node.type,
                featuredImage: node.featured_image,
                content: node.content.json,
              }}
            />
          ))}
        </CardList>
      )}
    />
  );
};

const Portfolio = () => (
  <>
    <SEO title="Portfolio" />
    <Container>
      <h1>
        Portfolio<span className="accent">.</span>
      </h1>

      <Router>
        <Route path={['/portfolio/:id', '/portfolio']} component={List} />
      </Router>

      <p>
        This is a small selection of the hundreds of projects I worked on.
        <br />
        Want to see more?{' '}
        <Link to="/contact">
          <strong>Get in touch</strong>
        </Link>{' '}
        and let me know what you're looking for, so I can send you a more
        comprehensive portfolio.
      </p>
    </Container>
  </>
);

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default Portfolio;
