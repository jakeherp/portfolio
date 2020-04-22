import React from 'react';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';

const ErrorPage = () => (
  <>
    <SEO title="404 - Not found" />
    <Container>
      <h1>This page was not found</h1>
      <p>I'm sorry for the confusion. Please go back and try again.</p>
    </Container>
  </>
);

export default ErrorPage;
