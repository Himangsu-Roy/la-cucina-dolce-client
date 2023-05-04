import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import BlogText from "../../components/BlogContent/BlogText";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PdfDocument from "../../components/PdfDocument/PdfDocument";

const Blog = () => {
  return (
    <div>
      <Header></Header>

      <div className="max-w-[700px] mx-auto">
        <h1 className="mb-8 text-[30px] font-[700] leading-tight ">
          Understanding React: Uncontrolled vs. Controlled Components,
          PropTypes, Node.js vs. Express.js, and Custom Hooks
        </h1>

        <PDFDownloadLink document={<PdfDocument />} filename="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button className="bg-[orange] text-white py-2 rounded px-3">Download pdf</button>
            )
          }
        </PDFDownloadLink>
        <BlogText></BlogText>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
