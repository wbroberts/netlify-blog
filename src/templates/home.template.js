import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';

import Layout from '../components/layout';
import InstagramList from '../components/instagram-list';
import SocialMediaList from '../components/socialmedia-list';

export const HomePageTemplate = ({ main, contact }) => {
  const { title, description } = main;
  const { buttontext, socialmedia } = contact;

  return (
    <div>
      <section className="bg-white relative py-10">
        <div className="container mx-auto px-4 flex flex-wrap h-full">
          <div className="flex-1 flex flex-col justify-center items-center h-full py-10">
            <h1 className="text-5xl tracking-wide text-gray-600 font-thin">
              {title}
            </h1>

            <div className="border-b border-teal-600 w-3/4 mt-4 mb-6" />

            <p className="text-xl leading-normal mb-8">{description}</p>

            <Link to="/contact">
              <button className="btn bg-pink-500 px-8 py-2 mb-8 rounded-full text-white text-xl hover:bg-pink-400 outline-none focus:outline-none">
                {buttontext}
              </button>
            </Link>

            <SocialMediaList socialmedia={socialmedia}></SocialMediaList>
          </div>
        </div>
      </section>

      <section className="py-10 relative mb-4">
        <div className="bg-gray-200 skew absolute h-full w-full z-neg"></div>
        <div className="container m-auto">
          <h2 className="text-2xl font-semibold py-6 z-10">@vegandthecity</h2>{' '}
        </div>
        <InstagramList></InstagramList>
      </section>
    </div>
  );
};

const HomePage = ({ data, location }) => {
  const { frontmatter: page } = data.markdownRemark;
  const { childImageSharp } = data.file;
  const hero = {
    heading: page.heading,
    subheading: page.subheading,
    fluid: childImageSharp.fixed,
  };

  return (
    <Layout location={location} hero={hero}>
      <SEO title={page.title}></SEO>
      <HomePageTemplate
        main={page.main}
        contact={page.contact}
      ></HomePageTemplate>
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query HomePageQuery {
    markdownRemark(frontmatter: { template: { eq: "home" } }) {
      frontmatter {
        title
        slug
        type
        heading
        featuredimage
        subheading
        main {
          title
          image {
            link
            alt
          }
          description
        }
        contact {
          buttontext
          socialmedia {
            account
            link
            color
          }
        }
      }
    }
    file(relativePath: { eq: "maeve-home.png" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
