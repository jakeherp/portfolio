import React from 'react';
import PropTypes from 'prop-types';
import Layout from './src/components/templates/Layout';

const transitionDelay = 500;

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};

wrapPageElement.propTypes = {
  element: PropTypes.shape(),
  props: PropTypes.shape(),
};
