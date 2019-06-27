import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FeaturedList from '../components/featured-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export const HomePageTemplate = ({
  heading,
  subheading,
  main,
  contact,
  featuredimage,
}) => {
  const { title, image, description } = main;
  const { buttontext, socialmedia } = contact;

  return (
    <div>
      <div
        className="bg-gray-100 flex flex-col w-full justify-center items-center relative"
        style={{ minHeight: '60vh' }}
      >
        <div className="z-10 text-center">
          <h1 className="text-6xl tracking-wider font-thin">{heading}</h1>
          <h3 className="text-xl font-light">{subheading}</h3>
        </div>
        <div
          style={{ zIndex: '0', bottom: '0', left: '50px' }}
          className="absolute"
        >
          <Img fixed={featuredimage.fixed} />
        </div>
      </div>

      <section className="bg-white relative">
        <div className="container mx-auto px-4 flex flex-wrap h-full">
          <div className="bg-teal-600 md:w-px-400 overflow-hidden relative py-10">
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

            <div className="flex items-center justify-center">
              <div className="w-full text-2xl text-pink-300">
                {socialmedia.map(acc => {
                  const classes = ['btn', 'no-underline', 'p-2', 'social'];
                  const withHover = [...classes, `hover-${acc.color}`];

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
    </div>
  );
};

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;
  console.log(data);
  const { childImageSharp } = data.file;

  return (
    <Layout>
      <SEO title={page.title}></SEO>
      <HomePageTemplate
        heading={page.heading}
        subheading={page.subheading}
        main={page.main}
        contact={page.contact}
        featuredimage={childImageSharp}
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
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
