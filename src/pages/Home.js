import React from "react";
import About from "../components/About";
import Clients from "../components/Clients";
import Courses from "../components/Courses";
import Services from "../components/Services";
import Team from "../components/Team";
import Whyus from "../components/Whyus";

const Home = () => {
  return (
    <div>
      <main id="main">
        <About />
        <Services />
        <Courses />
        <Team />
        <Whyus/>
        <Clients />
      </main>
    </div>
  );
};

export default Home;
