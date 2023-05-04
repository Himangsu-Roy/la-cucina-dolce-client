import React from 'react';
import BlogContent from './BlogContent';

const BlogText = () => {

    const posts = [
      {
        title: "Uncontrolled vs Controlled Components",
        text: "React component can be controlled or uncontrolled it's depent how to handle you. Controlled component have their own state management system and user input is handled by through the component state. Uncontrolled components, where the state of the component is handled by the DOM and React does not have any control over it.",
      },
      {
        title: "How to Validate React Props using PropTypes",
        text: "PropTypes is a library for React. That can be validate type of props passed to a commponent. This can help us catch error on the Development.",
        func: `
        import PropTypes from 'prop-types';

        function MyComponent(props) {
        // component logic here
        }

        MyComponent.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        email: PropTypes.string.isRequired,
        };

          `,
      },
      {
        title: "Node.js vs Express.js",
        text: "Node.js is a runtime environment for executing javascript code outside of a web browser. It allows developer to write server-side application using javascript. Express.js is a web framework build on top of Node.js. It provide a simple way to build web application and APIs.",
      },
      {
        title: "Custom Hooks in React",
        text: "Custom hook is a functional component that have common logic and it can be reuse for different react component.",
        func: `
        import { useState, useEffect } from 'react';

        function useLocalStorage(key, initialValue) {
        const [value, setValue] = useState(() => {
            const storedValue = localStorage.getItem(key);
            return storedValue !== null ? JSON.parse(storedValue) : initialValue;
        });

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);

        return [value, setValue];
        }

        export default useLocalStorage;

          `,
      },
    ];

    return (
        <div>
            <BlogContent posts={posts}></BlogContent>
        </div>
    );
}

export default BlogText;
