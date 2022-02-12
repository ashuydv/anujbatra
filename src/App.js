import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import logo from "./assets/img/hero-logo.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Route, Router, Routes } from "react-router-dom";
import Typewriter from 'typewriter-effect/dist/core'
import Courses from "./components/Courses";
import Socials from "./pages/Socials";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    new Typewriter('#typewriter', {
      strings: ['Anuj Batra', 'an Entrepreneur', 'an Advisor'],
      autoStart: true,
      loop: true
    })
  }, []);


  return (
    <div className="App">
      <section id="hero">
        <div className="hero-container">
          <a href="index.html" className="hero-logo" data-aos="zoom-in">
            <img src={logo} alt="" />
          </a>
          <h1 data-aos="zoom-in">Hey, I'm </h1>
          <h2 data-aos="fade-up" id="typewriter" ></h2>
          <a
            data-aos="fade-up"
            data-aos-delay="200"
            href="#about"
            className="btn-get-started scrollto"
          >
            Get Started
          </a>
        </div>
      </section>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/socials' element={<Socials/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
