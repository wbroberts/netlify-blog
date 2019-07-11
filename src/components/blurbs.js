import React from 'react';
import Fade from 'react-reveal/Fade';

const Blurbs = ({ blurbs }) => {
  return (
    <div className="flex flex-wrap justify-between items-center -mx-2">
      <Fade right cascade>
        {blurbs.map(blurb => {
          return (
            <article
              key={blurb.title}
              className="relative flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-6 overflow-hidden"
              style={{
                height: '300px',
                maxWidth: '380px',
              }}
            >
              <div className="w-full h-full border-purple-800 absolute"></div>
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${blurb.image.src})`,
                  backgroundSize: 'cover',
                  height: '250px',
                }}
              ></div>
              <h3 className="py-2 font-semibold text-lg">{blurb.title}</h3>
              <p>{blurb.description}</p>
            </article>
          );
        })}
      </Fade>
    </div>
  );
};

export default Blurbs;
