import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#F9F9F9] text-base-content">
      <div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          La Cucina Dolce
        </Link>
        <p className="max-w-sm">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment
        </p>
      </div>

      <div>
        <span className="footer-title">La Cucina Dolce</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Feedback</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Follow</span>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Youtube</a>
      </div>
    </footer>
  );
};

export default Footer;
