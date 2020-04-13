import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SEO from 'Molecules/Seo';

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
  const post = data.contentfulItem;
  // const siteTitle = this.props.data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <>
      <SEO title={post.title} description={post.description} />
      <Img
        fluid={post.featured_image.fluid}
        alt={post.title}
        style={{ maxHeight: '400px' }}
      />
      <div className="container" style={{ marginTop: '2rem' }}>
        <h2>{post.title}</h2>
        <h3>{post.type}</h3>
        <div>{documentToReactComponents(post.content.json)}</div>
        <p>
          <strong>Technologies used:</strong> {post.technologies.join(', ')}
        </p>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Visit project
        </a>
        <ul className="pagination">
          {previous && (
            <li>
              <Link to={`/${previous.slug}/`} rel="prev">
                &laquo; {previous.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={`/${next.slug}/`} rel="next">
                {next.title} &raquo;
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default PortfolioItem;

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
