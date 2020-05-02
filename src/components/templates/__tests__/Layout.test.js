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
      fill: #d6deeb;
      width: 50vw;
      max-width: 280px;
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
              data-testid="home"
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
              data-testid="about"
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
              data-testid="portfolio"
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
              data-testid="contact"
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
        <a
          data-testid="logo"
          href="/"
        >
          <svg
            className="c9"
            viewBox="0 0 385 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.55 8.013L0 21.613v4.65l16.45 13.65 3.15-4L5 24.213v-.55l14.55-11.7-3-3.95zM27.6 7.713v5.8h9.7v14.3c0 4.8-.5 5.6-11.5 5.05v6.3c14.1.35 18.9-3.05 18.9-11.45v-20H27.6zM61.45 34.013c-2.1 0-3.35-1.1-3.35-2.95 0-2.15 1.15-3.45 7.6-2.75.05 1.65.05 3.1.15 4.35-1.45.85-3.05 1.35-4.4 1.35zm5.2 4.9l6.55-.35c-.25-3.4-.55-7.8-.55-12.35 0-10.05-3.65-13.3-19.55-13.35l-.65 5.95c10.4.25 12.85 1.15 13.2 5-10.25-.2-14.6 4-14.6 8.95 0 4.1 3.05 6.6 7.5 6.6 3.35 0 5.8-1.5 7.6-3.3l.5 2.85zM77.95 26.513c0 7.9 4.1 14 20.25 12.4l.7-5.85c-10.4.75-13.9-1.15-13.9-7.5 0-4.35 1.25-6.55 13.55-5.8l-.45-6.7c-15.55-.2-20.15 6.25-20.15 13.45zM113.75 39.513c6.95 0 12.75-5.6 12.75-14.15 0-8.3-4.35-12.75-10.7-12.75-7 0-12.75 5.9-12.75 14.15 0 8.3 4.35 12.75 10.7 12.75zm1.3-5.7c-3.05 0-4.75-2.7-4.75-8.35 0-4.9 1.6-7.15 4.25-7.15 3 0 4.75 2.7 4.75 8.3 0 4.95-1.6 7.2-4.25 7.2zM138.4 39.413c7.6 0 14.25-5.55 14.25-14.75 0-7.3-3.75-11.95-9-11.95-2.45 0-4.45 1.05-6 2.5V2.963l-7.1.6v34.45c2.4.95 4.9 1.4 7.85 1.4zm2.55-6.1c-1.25 0-2.25-.2-3.3-.55v-13.3c1-.65 2.05-1 3.05-1 2.95 0 4.9 2.55 4.9 7.95 0 5-1.45 6.9-4.65 6.9zM181.66 38.61h5.9v-31h-5.9v13.15h-8.9V7.61h-5.85v31h5.85V25.16h8.9v13.45zM212.91 39.21l.55-4.65c-11-.25-14.75-1.9-15.35-6.9l16.05-.45c.9-8.65-2.45-14.15-9.45-14.15-6.55 0-12.15 5.9-12.15 13.55 0 8.1 4.25 12.75 20.35 12.6zm-9.2-21.6c3.45 0 5 2.45 5.15 6.4-3.1.1-8.15.25-10.8.35.25-4.65 2.25-6.75 5.65-6.75zM237.91 38.61l.45-4.2h-7.55c-.1-5.3-.15-9.5-.25-13.25 2.8-1.35 6.25-2.25 10.55-2.5l-.25-5.9c-4.7.6-8.25 2.65-10.5 5.25-.1-1.25-.4-4.05-.45-4.3h-10.3l-.45 3.95 5.9.4c.1 4.4.15 9.6.25 16.35h-6.05v4.2h18.65zM255.01 34.46c-1.2 0-2.15-.2-3.25-.6-.05-6.5-.15-11.1-.2-14.65 1.35-1 2.9-1.6 4.4-1.6 3.35 0 5.8 2.9 5.8 8.65 0 5.5-2.95 8.2-6.75 8.2zm-3.25 12.35v-7.6c.45.05.85.05 1.3.05 7.8 0 14.2-5.25 14.2-14.35 0-7.25-3.85-11.85-9.05-11.85-2.9 0-5.2 1.4-6.95 3.1l-.25-2.55-5.1.3c.25 4.95.3 12 .3 24.85v8.55l5.55-.5zM291.66 39.21l.55-4.65c-11-.25-14.75-1.9-15.35-6.9l16.05-.45c.9-8.65-2.45-14.15-9.45-14.15-6.55 0-12.15 5.9-12.15 13.55 0 8.1 4.25 12.75 20.35 12.6zm-9.2-21.6c3.45 0 5 2.45 5.15 6.4-3.1.1-8.15.25-10.8.35.25-4.65 2.25-6.75 5.65-6.75zM316.66 38.61l.45-4.2h-7.55c-.1-5.3-.15-9.5-.25-13.25 2.8-1.35 6.25-2.25 10.55-2.5l-.25-5.9c-4.7.6-8.25 2.65-10.5 5.25-.1-1.25-.4-4.05-.45-4.3h-10.3l-.45 3.95 5.9.4c.1 4.4.15 9.6.25 16.35h-6.05v4.2h18.65z"
            />
            <path
              d="M360.404 0l-29.255 41.453 5.583 3.802 29.255-41.454L360.404 0z"
              fill="#e94e1b"
            />
            <path
              d="M367.96 39.81l16.65-13.65v-4.65l-16.4-13.55-3.1 4 14.5 11.6v.55l-14.65 11.8 3 3.9z"
            />
          </svg>
        </a>
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
