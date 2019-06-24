import React from 'react';
import { Link } from 'gatsby';

const PostPreview = ({ title, date, slug, excerpt }) => (
  <article className="border rounded p-4 mb-8">
    <header>
      <h2 className="text-xl font-semibold">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <p className="italic">{date}</p>
    </header>
    <p>{excerpt}</p>

    <Link to={`/blog/${slug}`}>
      <button className="py-2 px-4 outline-none focus:outline-none text-white bg-purple-600 rounded">
        Keep Reading →
      </button>
    </Link>
  </article>
);

export default PostPreview;
