import React from 'react';
import styled from 'styled-components';
import Menu from 'Atoms/Menu';

const Foot = styled.footer`
  padding: 0 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media print {
    display: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Footer = () => (
  <Foot>
    <div>
      &copy; {new Date().getFullYear()} Jacob Herper
      <br />
      Proudly built with{' '}
      <a href="https://gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
        Gatsby
      </a>
      .
    </div>
    <nav>
      <Menu>
        <li>
          <a
            href="https://github.com/jakeherp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jacobherper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/jakeherp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </Menu>
    </nav>
  </Foot>
);

export default Footer;
