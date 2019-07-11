import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import Slide from 'react-reveal/Slide';

import Layout from '../components/layout';
import InstagramList from '../components/instagram-list';
import SocialMediaList from '../components/socialmedia-list';
import Blurbs from '../components/blurbs';

export const HomePageTemplate = ({ main, contact, blurbs }) => {
  const { title, description, image } = main;
  const { buttontext, socialmedia } = contact;

  return (
    <div>
      <section className="bg-gray-100 relative py-20">
        <div className="px-6 flex flex-wrap justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 py-10 px-4">
            <Slide left>
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
            </Slide>
          </div>
          <div className="flex justify-center w-full md:w-1/2 p-6">
            <img
              style={{ width: 'auto', height: 'auto' }}
              src={image.link}
              alt={image.alt}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <Blurbs blurbs={blurbs}></Blurbs>
      </section>

      <section className="relative py-20 relative mb-4">
        <div className="bg-gray-200 skew absolute h-full w-full z-neg"></div>
        <div className="">
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
        blurbs={page.blurbs}
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
        backgroundimage
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
        blurbs {
          title
          image {
            src
            alt
          }
          description
        }
      }
    }
    file(relativePath: { eq: "maeve-home.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
