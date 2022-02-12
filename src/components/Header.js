import React, { useEffect } from "react";
import logo from "../assets/img/logo.png";
import AOS from 'aos'
import { Link } from "react-router-dom";

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <header id="header" className="d-flex align-items-center" >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" className="img-fluid" />
            </a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              {/* <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a className="nav-link scrollto" href="#">
                  Services
                </a>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto " href="#">
                  Blogs
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/socials">
                  Socials
                </a>
              </li>
              {/* <li>
                <a className="nav-link scrollto" href="#pricing">
                  Pricing
                </a>
              </li> */}
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
