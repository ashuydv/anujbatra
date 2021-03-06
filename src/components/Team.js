import React from "react";
import team1 from "../assets/img/team/team-1.jpg";
import team2 from "../assets/img/team/team-2.jpg";
import team3 from "../assets/img/team/team-3.jpg";

const Team = () => {
  return (
    <div>
      <section id="team" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>
              Magnam dolores commodi suscipit eius consequatur ex aliquid fuga
              eum quidem
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="zoom-in">
                <div className="member-img">
                  <img src={team1} className="img-fluid" alt="" />

                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Animi est delectus alias quam repellendus nihil nobis dolor.
                    Est sapiente occaecati et dolore. Omnis aut ut nesciunt
                    explicabo qui. Eius nam deleniti ut omnis
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="zoom-in" data-aos-delay="100">
                <div className="member-img">
                  <img src={team2} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>
                    Aspernatur iste esse aliquam enim et corporis. Molestiae
                    voluptatem aut eligendi quis aut. Libero vel amet voluptatem
                    eos rerum non doloremque
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="zoom-in" data-aos-delay="200">
                <div className="member-img">
                  <img src={team3} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    Ut enim possimus nihil cupiditate beatae. Veniam facere quae
                    non qui necessitatibus rerum eos vero. Maxime sit sunt quo
                    dolor autem est qui quaerat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
