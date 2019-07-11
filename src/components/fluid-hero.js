import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

const FluidHero = ({ image, title, color }) => {
  return (
    <div style={{ backgroundColor: 'pink' }}>
      <div
        className="container m-auto relative overflow-hidden"
        style={{ height: '60vh' }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-25"></div>
        <div className="h-full w-full absolute z-10">
          <Img fluid={image} alt="Hero image" />
        </div>
        {title ? (
          <Fade bottom delay={250}>
            <div className="h-full flex flex-col justify-center z-50 text-center text-white">
              <h1 className="text-6xl tracking-wider font-thin z-50">
                {title}
              </h1>
            </div>
          </Fade>
        ) : null}
      </div>
    </div>
  );
};

export default FluidHero;
