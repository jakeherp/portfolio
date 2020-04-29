import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Post from '../Post';

const props = {
  title: 'Post title',
  slug: 'post-slug',
  image: {
    fluid: {
      base64: '',
      aspectRatio: 1.5,
      src: '/',
      srcSet: '/',
      sizes: '(max-width: 800px) 100vw, 800px',
    },
  },
  type: 'Post Type',
};

test('renders correctly', () => {
  const { container } = render(<Post data={props} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      position: relative;
      overflow: hidden;
    }

    .c0 img {
      -webkit-transition: -webkit-transform 0.3s ease !important;
      -webkit-transition: transform 0.3s ease !important;
      transition: transform 0.3s ease !important;
    }

    .c0:hover img {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }

    .c1 {
      position: absolute;
      bottom: 0;
      text-align: center;
      width: 100%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
      pointer-events: none;
    }

    .c1 h3 {
      margin: 0;
      color: #fff;
    }

    <div
      class="c0"
      data-testid="portfolioItemPostTitle"
    >
      <a
        href="/portfolio/post-slug/"
      >
        <div
          class=" gatsby-image-wrapper"
          style="position: relative; overflow: hidden;"
        >
          <div
            aria-hidden="true"
            style="width: 100%; padding-bottom: 66.66666666666667%;"
          />
          
          <picture>
            <source
              sizes="(max-width: 800px) 100vw, 800px"
              srcset="/"
            />
            <img
              alt=""
              loading="lazy"
              sizes="(max-width: 800px) 100vw, 800px"
              src="/"
              srcset="/"
              style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
            />
          </picture>
          <noscript>
            &lt;picture&gt;&lt;source srcset="/" sizes="(max-width: 800px) 100vw, 800px" /&gt;&lt;img loading="lazy" sizes="(max-width: 800px) 100vw, 800px" srcset="/" src="/" alt="" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
          </noscript>
        </div>
        <div
          class="c1"
        >
          <h3>
            Post title
          </h3>
          <small>
            Post Type
          </small>
        </div>
      </a>
    </div>
  `);
});
