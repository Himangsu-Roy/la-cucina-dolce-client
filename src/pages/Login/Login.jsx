import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoginForm from "../../layout/LoginForm";

const Login = () => {
  return (
    <div>
      <Header></Header>
        <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  );
};

export default Login;
