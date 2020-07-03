import React from 'react';
import styled from 'styled-components';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';

interface IProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: IProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Uses = () => (
  <>
    <SEO title="Uses" />
    <Container>
      <Title>Jacob uses</Title>
      <p>
        Welcome to my &quot;Uses&quot; page, that lists some of the hardware and
        software I use on a daily basis.
      </p>

      <h2>Hardware</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/gp/product/B0821M3WQ5?ie=UTF8&tag=jakeherp-21&camp=1634&linkCode=xm2&creativeASIN=B0821M3WQ5">
              Macbook Pro 16"
            </Link>
          </strong>{' '}
          (2.4 GHz i9 CPU, 32 GB Ram, 2TB storage)
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/gp/product/B07BR9ZBZ4?ie=UTF8&tag=jakeherp-21&camp=1634&linkCode=xm2&creativeASIN=B07BR9ZBZ4">
              Apple Magic Keyboard 2
            </Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/gp/product/B07NJ2BCC2?ie=UTF8&tag=jakeherp-21&camp=1634&linkCode=xm2&creativeASIN=B07NJ2BCC2">
              Apple Magic Trackpad 2
            </Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/gp/product/B0845MWTS1?ie=UTF8&tag=jakeherp-21&camp=1634&linkCode=xm2&creativeASIN=B0845MWTS1">
              LG 34WN80C-B 34" ultra-wide monitor, connected via USB-C
            </Link>
          </strong>{' '}
          4K monitor
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/gp/product/B01F01DRW6?ie=UTF8&tag=jakeherp-21&camp=1634&linkCode=xm2&creativeASIN=B01F01DRW6">
              Rain Design mStand
            </Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/gp/product/B07XL8WJK8?ie=UTF8&tag=jakeherp-21&camp=1634&linkCode=xm2&creativeASIN=B07XL8WJK8">
              iPhone 11 Pro
            </Link>
          </strong>{' '}
          (256 GB)
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/gp/product/B07Q9MJKBV?ie=UTF8&tag=jakeherp-21&camp=1634&linkCode=xm2&creativeASIN=B07Q9MJKBV">
              Bose 700
            </Link>
          </strong>{' '}
          headphones
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/gp/product/B07ZPML7NP?ie=UTF8&tag=jakeherp-21&camp=1634&linkCode=xm2&creativeASIN=B07ZPML7NP">
              Apple AirPods Pro
            </Link>
          </strong>{' '}
          for on the go
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/gp/product/B07YSXZ7QD?ie=UTF8&tag=jakeherp-21&camp=1634&linkCode=xm2&creativeASIN=B07YSXZ7QD">
              Nest Wifi
            </Link>
          </strong>{' '}
          Mesh Network
        </li>
        <li>
          <strong>
            <Link href="https://store.google.com/product/google_home">
              Google Home
            </Link>
          </strong>{' '}
          to manage my smart home
        </li>
      </List>

      <h2>Development Tools</h2>
      <List>
        <li>
          <strong>
            <Link href="https://code.visualstudio.com/">VS Code</Link>
          </strong>{' '}
          with the{' '}
          <strong>
            <Link href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
              Night Owl
            </Link>
          </strong>{' '}
          theme and{' '}
          <strong>
            <Link href="https://www.typography.com/fonts/operator/styles/operatormono">
              Operator Mono
            </Link>
          </strong>{' '}
          font
        </li>
        <li>
          <strong>
            <Link href="https://www.iterm2.com/">iTerm 2</Link>
          </strong>{' '}
          Terminal
        </li>
        <li>
          <strong>
            <Link href="https://www.sourcetreeapp.com/">Sourcetree</Link>
          </strong>{' '}
          for version control beyond the command line
        </li>
        <li>
          <strong>
            <Link href="https://insomnia.rest/">Insomnia</Link>
          </strong>{' '}
          to test REST and GraphQL API's
        </li>
      </List>

      <h2>Design Tools</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.sketch.com/">Sketch</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://www.figma.com/">Figma</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://affinity.serif.com/en-gb/photo/">
              Affinity Photo
            </Link>
          </strong>
          ,{' '}
          <strong>
            <Link href="https://affinity.serif.com/en-gb/designer/">
              Affinity Designer
            </Link>
          </strong>
          ,{' '}
          <strong>
            <Link href="https://affinity.serif.com/en-gb/publisher/">
              Affinity Publisher
            </Link>
          </strong>
        </li>
      </List>

      <h2>Productivity</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.notion.so/?r=008f1f1395694a2594659c43f8d666d8">
              Notion
            </Link>
          </strong>{' '}
          for notes and to-do lists
        </li>
        <li>
          <strong>
            <Link href="https://www.atlassian.com/software/jira">Jira</Link>
          </strong>{' '}
          for project management
        </li>
        <li>
          <strong>
            <Link href="https://slack.com/">Slack</Link>
          </strong>{' '}
          for communication
        </li>
        <li>
          <strong>
            <Link href="https://gsuite.google.com/">G-Suite</Link>
          </strong>{' '}
          for email, calendars and Google Drive
        </li>
      </List>

      <h2>Various other software</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.google.com/chrome/canary/">
              Google Chrome
            </Link>
          </strong>{' '}
          (Canary) for development
        </li>
        <li>
          <strong>
            <Link href="https://1password.com/">1Password</Link>
          </strong>{' '}
          as my password manager
        </li>
        <li>
          <strong>
            <Link href="https://www.backblaze.com/">Backblaze</Link>
          </strong>{' '}
          for constant backups of my machines
        </li>
        <li>
          <strong>
            <Link href="https://magnet.crowdcafe.com/">Magnet</Link>
          </strong>{' '}
          to manage windows
        </li>
      </List>
    </Container>
  </>
);

export default Uses;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media print {
    font-size: 22pt;
  }
`;

const List = styled.ul`
  padding: 0 1rem;
  margin: 0;
  list-style: square;

  &:last-of-type {
    margin-bottom: 3rem;
  }
`;
