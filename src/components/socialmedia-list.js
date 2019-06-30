import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flip from 'react-reveal/Flip';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const SocialMediaList = ({ socialmedia }) => {
  return (
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
              <Flip duration={500} right cascade key={acc.link}>
                <a
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
  );
};

export default SocialMediaList;
