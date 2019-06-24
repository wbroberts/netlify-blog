import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FeaturedList from '../components/featured-list';

const IndexPage = () => (
  <Layout hero={true}>
    <SEO title="Home" />
    <div style={{ minHeight: '60vh' }}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </div>
    <section className="h-56 bg-white"></section>

    <section className="h-56 bg-teal-600">
      <FeaturedList></FeaturedList>
    </section>
  </Layout>
);

export default IndexPage;
