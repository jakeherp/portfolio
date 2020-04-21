import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';

interface IProps {
  data: {
    contentfulItem: {
      title: string;
      description: string;
      featured_image: {
        fluid: any;
      };
      type: string;
      content: {
        json: any;
      };
      technologies: string[];
      url: string;
    };
  };
  pageContext: {
    previous: {
      slug: string;
      title: string;
    } | null;
    next: {
      slug: string;
      title: string;
    } | null;
  };
}

const PortfolioItem = ({ data, pageContext }: IProps) => {
  const {
    title,
    description,
    featured_image: image,
    type,
    content: { json: content },
    technologies,
    url,
  } = data.contentfulItem;
  const { previous, next } = pageContext;

  return (
    <>
      <SEO title={title} description={description} />
      <Image fluid={image.fluid} alt={title} style={{ maxHeight: '400px' }} />
      <Container>
        <h2>{title}</h2>
        <h3>{type}</h3>
        <div>{documentToReactComponents(content)}</div>
        <p>
          <strong>Technologies used:</strong> {technologies.join(', ')}
        </p>
        <Button href={url} target="_blank" rel="noopener noreferrer">
          Visit project
        </Button>
        <Pagination>
          {previous && (
            <li>
              <Link to={`/portfolio/${previous.slug}/`} rel="prev">
                &laquo; {previous.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={`/portfolio/${next.slug}/`} rel="next">
                {next.title} &raquo;
              </Link>
            </li>
          )}
        </Pagination>
      </Container>
    </>
  );
};

export default PortfolioItem;

const Image = styled(Img)`
  margin-top: 2rem;
`;

const Button = styled.a`
  background: #fff;
  border: 2px solid #e94e1b;
  color: #e94e1b;
  padding: 0.5rem 2rem;
  border-radius: 99px;
  margin: 1rem 0;
  transition: 0.2s;
  display: inline-block;
  text-decoration: none;
  &:hover {
    background: #e94e1b;
    color: #fff;
  }
`;

const Pagination = styled.ul`
  list-style: none;
  margin: 3rem 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    a {
      color: #ccc;
      text-decoration: none;
      transition: 0.2s;
      &:hover {
        color: #999;
      }
    }
  }
`;

export const pageQuery = graphql`
  query PortfolioItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulItem(slug: { eq: $slug }) {
      title
      client
      type
      technologies
      url
      description
      content {
        json
      }
      featured_image {
        fluid(maxWidth: 1920, quality: 70) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
