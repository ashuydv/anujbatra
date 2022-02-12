import React from 'react';
import about from "../assets/img/about.jpg";

const About = () => {
  return <div>
      <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>About Me</h2>
              <p>Magnam dolores commodi suscipit eius consequatur</p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="image">
                  <img
                    src={about}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3">
                  <h3 className=' pb-2' >Be like <span className='bee bg-gradient-to-tr from-yellow-400 to-yellow-600 text-white px-2'>honeybee</span>, who gathers nectar wherever it goes, Seek the goodness that is found everywhere.</h3>
                  <ul>
                    <li>
                      <i className="bx bx-check-double"></i> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bx bx-check-double"></i> Duis aute irure
                      dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bx bx-check-double"></i> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  </div>;
};

export default About;
