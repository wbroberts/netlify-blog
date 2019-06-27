import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FeaturedList from '../components/featured-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';

export const HomePageTemplate = ({ heading, subheading, main, contact }) => {
  const { title, image, description } = main;
  const { buttontext, socialmedia } = contact;

  return (
    <div>
      <div style={{ minHeight: '60vh' }}>
        <h1>{heading}</h1>
        <h3>{subheading}</h3>
      </div>

      <section className="bg-white relative">
        <div className="container mx-auto px-4 flex flex-wrap h-full">
          <div className="md:w-px-400 overflow-hidden relative py-10">
            <img
              className="absolute"
              style={{
                right: '20%',
                bottom: '-8%',
                width: '55%',
              }}
              src={image.link}
              alt={image.alt}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center h-full py-10">
            <h1 className="text-5xl tracking-wide text-grey-700 font-light">
              {title}
            </h1>

            <div className="border-b border-green w-3/4 mt-4 mb-6" />

            <p className="text-xl text-grey-600 leading-normal mb-8">
              {description}
            </p>

            <Link to="/contact">
              <button className="btn bg-pink-500 px-8 py-2 mb-8 rounded-full text-white text-xl hover:bg-pink-400 outline-none focus:outline-none">
                {buttontext}
              </button>
            </Link>

            <div className="flex items-center justify-center">
              <div className="w-full text-2xl text-gray-600">
                {socialmedia.map(acc => {
                  const classes = ['btn', 'no-underline', 'p-2'];
                  const withHover = [...classes, `hover:text-${acc.color}-700`];

                  return (
                    <a
                      key={acc.link}
                      href={acc.link}
                      target="blank"
                      className={withHover.join(' ')}
                    >
                      <FontAwesomeIcon icon={['fab', acc.account]} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-56 bg-teal-600">
        <FeaturedList></FeaturedList>
      </section>
    </div>
  );
};

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;

  return (
    <Layout hero={page.featuredimage ? page.featuredimage : null}>
      <SEO title={page.title}></SEO>
      <HomePageTemplate
        heading={page.heading}
        subheading={page.subheading}
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
  }
`;
