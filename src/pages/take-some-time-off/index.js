import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Gatsby from '../../images/podcast-logo.png';
import Location from '@reach/router';

const PodcastPage = () => (
  <div className="px-6">
    <h1 className="text-3xl font-semibold">Take Some Time Off</h1>
    <section className="flex items-center justify-between py-12">
      <div>
        <img src={Gatsby} />
      </div>
      <div>
        <p>..lor</p>
      </div>
    </section>
  </div>
);

export default ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Take Some Time Off"></SEO>
      <PodcastPage></PodcastPage>
    </Layout>
  );
};
