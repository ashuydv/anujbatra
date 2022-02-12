import React from 'react';
import testimonial1 from "../assets/img/testimonials/testimonials-1.jpg"
import testimonial2 from "../assets/img/testimonials/testimonials-2.jpg"
import testimonial3 from "../assets/img/testimonials/testimonials-3.jpg"
import testimonial4 from "../assets/img/testimonials/testimonials-4.jpg"
import testimonial5 from "../assets/img/testimonials/testimonials-5.jpg"

const Testimonial = () => {
  return <div>
              <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">
            <div className="quote-icon">
              <i className="bx bxs-quote-right"></i>
            </div>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </p>
                    <img
                      src={testimonial1}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                    </p>
                    <img
                      src={testimonial2}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                    </p>
                    <img
                      src={testimonial3}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                    </p>
                    <img
                      src={testimonial4}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                    </p>
                    <img
                      src={testimonial5}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
  </div>;
};

export default Testimonial;
