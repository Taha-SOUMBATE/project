import React from "react";
import photo from "../assets/code-typing-bro.svg";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import "animate.css";

const Home = () => {
  return (
    <>
      <div className="container ">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className=" ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start">
            <h1 className="animate__animated animate__animated animate__pulse animate__infinite">Je suis Taha soumbate</h1>
            <h1 className="fw-bold custom-font">Web Developer.</h1>
            <div className="boxe">
              <Typical steps={["web Desine", 1500, "Full stack developer", 1500, "Machin Lerning", 1500, "AI", 1500]} loop={Infinity} wrapper="p" />
            </div>
            <Link  to="/projects" className="btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2">
             mes projects
            </Link>
          </div>

          <div>
            <img src={photo} alt="" width={500} height={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
