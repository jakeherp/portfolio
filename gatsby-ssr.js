import React from 'react';
import PropTypes from 'prop-types';
import Layout from './src/components/templates/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

wrapPageElement.propTypes = {
  element: PropTypes.shape(),
  props: PropTypes.shape(),
};
