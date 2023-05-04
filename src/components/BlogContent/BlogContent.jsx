import React from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function BlogContent({ posts }) {

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {posts.map((post) => (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {post.title}
          </h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.text }}
          />
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={darcula}>
                {post.func}
              </SyntaxHighlighter>
            </code>
          </pre>
        </>
      ))}
    </div>
  );
}

BlogContent.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogContent;
