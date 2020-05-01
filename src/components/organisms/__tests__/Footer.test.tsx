import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Footer from '../Footer';

test('renders correctly', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c1 {
      list-style: none;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      font-size: 20px;
      margin: 0;
    }

    .c1 li {
      margin: 0 0.5rem;
    }

    .c1 li a {
      padding: 0px 0.25rem;
    }

    .c1 li a::after {
      content: '';
      display: block;
      height: 10px;
      width: 0%;
      margin-top: -10px;
      background: #e94e1b;
      -webkit-transition: all 0.5s ease 0s;
      transition: all 0.5s ease 0s;
    }

    .c1 li a:hover {
      border-bottom: none;
    }

    .c1 li a:hover::after {
      width: 110%;
    }

    .c1 li svg {
      margin-left: 1rem;
    }

    .c0 {
      padding: 0 3% 1rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    @media print {
      .c0 {
        display: none;
      }
    }

    @media screen and (max-width:768px) {
      .c0 {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center;
      }
    }

    <footer
      class="c0"
    >
      <div>
        © 
        2020
         Jacob Herper
        <br />
        Proudly built with
         
        <a
          href="https://gatsbyjs.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Gatsby
        </a>
        .
      </div>
      <nav>
        <ul
          class="c1"
        >
          <li
            data-testid="github"
          >
            <a
              href="https://github.com/jakeherp"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li
            data-testid="linkedin"
          >
            <a
              href="https://www.linkedin.com/in/jacobherper/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li
            data-testid="twitter"
          >
            <a
              href="https://twitter.com/jakeherp"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  `);
});
