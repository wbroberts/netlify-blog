import React from 'react';

const footer = ({ author }) => {
  return (
    <div className="bg-pink-300 text-white font-sans">
      <footer className="container m-auto">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> by {author}
      </footer>
    </div>
  );
};

export default footer;
