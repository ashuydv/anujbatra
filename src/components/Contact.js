import React from 'react';

const Contact = () => {
  return <div>
      <section id="contact" className="contact section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Magnam dolores commodi suscipit eius consequatur ex aliquid fuga
                eum quidem
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div
                  className="info d-flex flex-column justify-content-center"
                  data-aos="fade-right"
                >
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>
                      A108 Adam Street,
                      <br />
                      New York, NY 535022
                    </p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="f69f989099b6938e979b869a93d895999b"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                  data-aos="fade-left"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
  </div>;
};

export default Contact;
