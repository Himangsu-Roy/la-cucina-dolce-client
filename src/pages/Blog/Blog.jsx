import React from "react";
import BlogText from "../../components/BlogContent/BlogText";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      {/* <div className="h-[calc(100vh-287px)]">blog</div> */}
      <div className="max-w-[600px] mx-auto">
        <h1 className="mb-8 text-[30px] font-[700] leading-tight ">
          Understanding React: Uncontrolled vs. Controlled Components,
          PropTypes, Node.js vs. Express.js, and Custom Hooks
        </h1>
        <BlogText></BlogText>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
