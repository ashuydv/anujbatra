import AOS from 'aos';
import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return <div>
      <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <a href="#header" className="scrollto footer-logo">
                    <img src="assets/img/hero-logo.png" alt="" />
                  </a>
                  <h3>Knight</h3>
                  <p>
                    Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis
                    magni eligendi fuga maxime saepe commodi placeat.
                  </p>
                </div>
              </div>

              <div className="row footer-newsletter justify-content-center">
                <div className="col-lg-6">
                  <form action="" method="post">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                    />
                    <input type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="fab fa-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="container footer-bottom clearfix">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Knight</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
  </div>;
};

export default Footer;
