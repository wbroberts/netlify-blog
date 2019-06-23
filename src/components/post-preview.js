import React from 'react';
import { Link } from 'gatsby';

const PostPreview = ({ title, date, slug, excerpt }) => (
  <article className="border rounded p-4 mb-8">
    <header>
      <h2 className="text-xl font-semibold">
        <Link to={slug}>{title}</Link>
      </h2>
      <p className="italic">{date}</p>
    </header>
    <p>{excerpt}</p>
    <Link to={slug}>→ Keep reading...</Link>
  </article>
);

export default PostPreview;
