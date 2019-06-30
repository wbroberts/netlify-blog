import React from 'react';
import Layout from '../../components/layout';

const Thanks = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="container m-auto">
        <h1>Thank You!</h1>
        <p>I'll get back to you soon</p>
      </div>
    </Layout>
  );
};

export default Thanks;
