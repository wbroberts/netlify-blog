import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

const Hero = ({ hero }) => {
  const { fluid, heading, subheading } = hero;

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-neg"
        style={{
          backgroundImage: 'url(/images/background.png)',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="hidden sm:block h-full w-full absolute z-neg">
        <Img
          style={{
            position: 'absolute',
            bottom: '-10px',
            top: 'inherit',
          }}
          fixed={fluid}
          alt="Hero image"
        />
      </div>
      <Fade bottom delay={250}>
        <div className="h-full flex justify-center items-center z-50 text-center text-maeve-blue">
          <div className="py-8 px-12 border-4 border-black bg-white">
            <h1 className="text-6xl tracking-wider font-thin z-50">
              {heading}
            </h1>
            {subheading ? (
              <h3 className="text-xl font-light z-10">{subheading}</h3>
            ) : null}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
