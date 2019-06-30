import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

const Hero = ({ hero }) => {
  console.log(hero);
  const { fluid, color, heading, subheading } = hero;

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-maeve-blue z-neg"></div>
      <div className="h-full w-full absolute z-neg">
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
        <div className="h-full flex flex-col justify-center z-50 text-center text-maeve-blue">
          <h1 className="text-6xl tracking-wider font-thin z-50">{heading}</h1>
          {subheading ? (
            <h3 className="text-xl font-light z-10">{subheading}</h3>
          ) : null}
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
