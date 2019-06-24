import React from 'react';
import PostTemplate from '../../templates/post.template';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <PostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default BlogPostPreview;
