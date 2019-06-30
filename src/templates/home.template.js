import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import InstagramList from '../components/instagram-list';
import Flip from 'react-reveal/Flip';
import TransitionGroup from 'react-transition-group/TransitionGroup';

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
      <div className="bg-pink-400 h-screen w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-pink-300 opacity-50 z-30"></div>
        <div
          style={{ zIndex: '0', bottom: '-5px', left: '50px' }}
          className="absolute"
        >
          <div className="opacity-25 bg-pink-400 w-full h-full z-10"></div>
          <Img fixed={featuredimage.fixed} />
        </div>
        <Fade bottom delay={250}>
          <div className="h-full flex flex-col justify-center z-10 text-center text-white">
            <h1 className="text-6xl tracking-wider font-thin z-10">
              {heading}
            </h1>
            <h3 className="text-xl font-light z-10">{subheading}</h3>
          </div>
        </Fade>
      </div>

      <section className="bg-white relative py-10">
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
              <div className="w-full text-2xl">
                <TransitionGroup appear={true} enter={true}>
                  {socialmedia.map(acc => {
                    const classes = [
                      'btn',
                      'no-underline',
                      'p-2',
                      'social',
                      `text-${acc.color}-400`,
                    ];
                    const withHover = [...classes, `hover-${acc.color}`];

                    return (
                      <Flip duration={500} right cascade>
                        <a
                          key={acc.link}
                          href={acc.link}
                          target="blank"
                          className={withHover.join(' ')}
                        >
                          <FontAwesomeIcon icon={['fab', acc.account]} />
                        </a>
                      </Flip>
                    );
                  })}
                </TransitionGroup>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 relative overflow-y-hidden">
        <div className="bg-gray-200 skew absolute h-full w-full z-neg"></div>
        <div className="container m-auto">
          <h2 className="text-2xl font-semibold py-6 z-10">@vegandthecity</h2>{' '}
        </div>
        <InstagramList></InstagramList>
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
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
