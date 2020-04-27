import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import Layout from '../Layout';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Layout>
        <div />
      </Layout>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    .c8 path {
      stroke: #011627;
    }

    .c7 {
      outline: none;
      border: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      cursor: pointer;
      position: absolute;
      top: 18px;
      left: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: transparent;
    }

    .c6 {
      color: #011627;
    }

    .c5 {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-bottom: 20px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.5rem;
    }

    .c4 {
      margin: 0;
      padding: 0;
      padding: 40px;
      position: absolute;
      top: 100px;
      width: 230px;
    }

    .c9 {
      color: #e94e1b;
    }

    .c10 {
      position: absolute;
      right: 1rem;
      cursor: pointer;
    }

    .c3 {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 300px;
    }

    .c2 {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: auto;
      z-index: 1;
    }

    .c1 {
      padding: 1rem 3%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    .c1 h1 {
      margin: 0;
      line-height: 1;
    }

    .c12 {
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

    .c12 li {
      margin: 0 0.5rem;
    }

    .c12 li a {
      padding: 0px 0.25rem;
    }

    .c12 li a::after {
      content: '';
      display: block;
      height: 10px;
      width: 0%;
      margin-top: -10px;
      background: #e94e1b;
      -webkit-transition: all 0.5s ease 0s;
      transition: all 0.5s ease 0s;
    }

    .c12 li a:hover {
      border-bottom: none;
    }

    .c12 li a:hover::after {
      width: 110%;
    }

    .c12 li svg {
      margin-left: 1rem;
    }

    .c11 {
      padding: 0 3%;
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

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      min-height: 95vh;
    }

    @media screen and (max-width:375px) {
      .c1 h1 {
        font-size: 1.25rem;
      }
    }

    @media screen and (max-width:768px) {
      .c1 h1 {
        font-size: 1.75rem;
      }
    }

    @media print {
      .c1 {
        display: none;
      }
    }

    @media print {
      .c11 {
        display: none;
      }
    }

    @media screen and (max-width:768px) {
      .c11 {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center;
      }
    }

    <div
      className="c0"
    >
      <header
        className="c1"
      >
        <nav
          className="c2"
          style={Object {}}
        >
          <div
            className="c3 menu-background"
            style={
              Object {
                "clipPath": "circle(30px at 40px 40px)",
              }
            }
          />
          <ul
            className="c4"
            style={
              Object {
                "pointerEvents": "none",
              }
            }
          >
            <li
              className="c5"
              style={
                Object {
                  "opacity": 0,
                  "pointerEvents": "none",
                  "transform": "translateY(50px) translateZ(0)",
                }
              }
            >
              <a
                className="c6"
                href="/"
                onClick={[Function]}
              >
                Home
              </a>
            </li>
            <li
              className="c5"
              style={
                Object {
                  "opacity": 0,
                  "pointerEvents": "none",
                  "transform": "translateY(50px) translateZ(0)",
                }
              }
            >
              <a
                className="c6"
                href="/about"
                onClick={[Function]}
              >
                About
              </a>
            </li>
            <li
              className="c5"
              style={
                Object {
                  "opacity": 0,
                  "pointerEvents": "none",
                  "transform": "translateY(50px) translateZ(0)",
                }
              }
            >
              <a
                className="c6"
                href="/portfolio"
                onClick={[Function]}
              >
                Portfolio
              </a>
            </li>
            <li
              className="c5"
              style={
                Object {
                  "opacity": 0,
                  "pointerEvents": "none",
                  "transform": "translateY(50px) translateZ(0)",
                }
              }
            >
              <a
                className="c6"
                href="/contact"
                onClick={[Function]}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="c7"
            data-testid="MenuToggle"
            onClick={[Function]}
          >
            <svg
              className="c8"
              height="23"
              viewBox="0 0 23 23"
              width="23"
            >
              <path
                d="M 2 2.5 L 20 2.5"
                fill="transparent"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                strokeWidth="3"
                style={Object {}}
              />
              <path
                d="M 2 9.423 L 20 9.423"
                fill="transparent"
                opacity={1}
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                strokeWidth="3"
                style={Object {}}
              />
              <path
                d="M 2 16.346 L 20 16.346"
                fill="transparent"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                strokeWidth="3"
                style={Object {}}
              />
            </svg>
          </button>
        </nav>
        <h1
          data-testid="logo"
        >
          <a
            href="/"
          >
            &lt;Jacob Herper 
            <span
              className="c9"
            >
              /
            </span>
            &gt;
          </a>
        </h1>
        <div
          className="c10"
        >
          <
            aria-label="Light Mode"
            data-testid="lightMode"
            onClick={[Function]}
            role="button"
          />
        </div>
      </header>
      <main
        className=""
        style={
          Object {
            "opacity": 0,
          }
        }
      >
        <div />
      </main>
      <footer
        className="c11"
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
            className="c12"
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
    </div>
  `);
});
