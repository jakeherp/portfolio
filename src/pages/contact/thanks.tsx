import React from 'react';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';

const Thanks = () => (
  <>
    <SEO title="Thank you for reaching out" />
    <Container>
      <h1>Thank you for your message</h1>
      <p>Your message was sent. I'll get back to you as soon as I can.</p>
    </Container>
  </>
);

export default Thanks;
