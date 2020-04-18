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
      &copy; 2019 Jacob Herper
      <br />
      Proudly built with{' '}
      <a href="https://gatsbyjs.org/" target="_blank">
        Gatsby
      </a>
      .
    </div>
    <nav>
      <Menu>
        <li>
          <a href="https://github.com/jakeherp" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jacobherper/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jakeherp" target="_blank">
            Twitter
          </a>
        </li>
      </Menu>
    </nav>
  </Foot>
);

export default Footer;
