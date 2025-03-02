import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import AmanImg from "../../assets/images/aman.svg";
import AyushImg from "../../assets/images/Ayush.svg";
import DhirendraImg from "../../assets/images/Dhirendra.svg";
import LeftArrow from "../../assets/images/left.png";
import RightArrow from "../../assets/images/right.png";
import "./TestimonialSection.css"; // Add your custom CSS here

const Testimonial = () => {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 testimonials by default
    slidesToScroll: 1, // Scroll 1 testimonial at a time
    arrows: false,
    responsive: [
      {
        breakpoint: 991, // For screens smaller than 992px
        settings: {
          slidesToShow: 2, // Show 2 testimonials
        },
      },
      {
        breakpoint: 767, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 testimonial
        },
      },
    ],
  };

  // Go to the previous slide
  const goToPrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  // Go to the next slide
  const goToNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
      name: "Aman Singh",
      location: "Jaipur, Rajasthan",
      image: AmanImg,
    },
    {
      id: 2,
      text: "Their ability to produce high-quality, on-brand design elements and animation within days was a game changer!",
      name: "Ayush Kumar",
      location: "Jaipur, Rajasthan",
      image: AyushImg,
    },
    {
      id: 3,
      text: "INDTech Mark swiftly delivered content in two weeks, meeting client expectations, and managed workflow and communication efficiently and positively.",
      name: "Dhirendra Kumar",
      location: "Jaipur, Rajasthan",
      image: DhirendraImg,
    },
    {
      id: 4,
      text: "INDTech Mark swiftly delivered content in two weeks, meeting client expectations, and managed workflow and communication efficiently and positively.",
      name: "Dhirendra Kumar",
      location: "Jaipur, Rajasthan",
      image: DhirendraImg,
    },
    {
      id: 5,
      text: "INDTech Mark swiftly delivered content in two weeks, meeting client expectations, and managed workflow and communication efficiently and positively.",
      name: "Dhirendra Kumar",
      location: "Jaipur, Rajasthan",
      image: DhirendraImg,
    },
    {
      id: 6,
      text: "INDTech Mark swiftly delivered content in two weeks, meeting client expectations, and managed workflow and communication efficiently and positively.",
      name: "Dhirendra Kumar",
      location: "Jaipur, Rajasthan",
      image: DhirendraImg,
    },
  ];

  return (
    <section className="bodypx Testimonial bg-white py-80">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Client's Testimonial</h2>
            <p>
              Client success stories showcasing IND TechMark expertise in mobile
              app development,
              <br />
              web development, and digital transformation services
            </p>
          </div>

          <div className="pt-0 px-0 height">
            <div className="testimonial ">
              <div className="testimonial__inner ">
                {/* Slider Component */}
                <Slider ref={sliderRef} {...settings}>
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-slide ">
                      <div className="testimonial_box ">
                        <div className="testimonial_box-inner  ">
                          <div className="testimonial_box-top ">
                            <div className="testimonial_box-text ">
                              <p>{testimonial.text}</p>
                              <div className="d-flex align-items-center d-md-none ">
                                <div className="rate me-auto">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <React.Fragment key={star}>
                                      <input
                                        type="radio"
                                        id={`star${star}-${testimonial.id}`}
                                        name={`rate-${testimonial.id}`}
                                        value={star}
                                      />
                                      <label
                                        htmlFor={`star${star}-${testimonial.id}`}
                                        title={`${star} stars`}
                                      >
                                        ★
                                      </label>
                                    </React.Fragment>
                                  ))}
                                </div>
                                <span className="fw-bold fn-18">3.0 / 3.0</span>
                              </div>
                            </div>
                            <div className="testimonial_box-shape"></div>
                          </div>
                          <div className="testimonial_box-bottom">
                            <div className="testimonial_box-profile align-items-center">
                              <div className="testimonial_box-img">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                />
                              </div>
                              <div className="testimonial_box-info">
                                <div className="testimonial_box-name">
                                  <h3 className="mb-0">{testimonial.name}</h3>
                                  <p className="mb-1">{testimonial.location}</p>
                                </div>
                              </div>
                              <div className="d-md-flex align-items-center ps-3 d-none">
                                <div className="rate ms-auto">
                                  {[5, 4, 3, 2, 1].map((star) => (
                                    <React.Fragment key={star}>
                                      <input
                                        type="radio"
                                        id={`star${star}-desktop-${testimonial.id}`}
                                        name={`rate-desktop-${testimonial.id}`}
                                        value={star}
                                      />
                                      <label
                                        htmlFor={`star${star}-desktop-${testimonial.id}`}
                                        title="text"
                                      >
                                        {star} stars
                                      </label>
                                    </React.Fragment>
                                  ))}
                                </div>
                                <span className="fw-bold fn-18">3.0 / 3.0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

                {/* Custom Arrows */}
                <div className="btn-wrap ">
                  <button className="prev-btn com-btn mr-3" onClick={goToPrev}>
                    <span>
                      <img src={LeftArrow} alt="Previous" />
                    </span>
                  </button>
                  <button className="next-btn com-btn" onClick={goToNext}>
                    <span>
                      <img src={RightArrow} alt="Next" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
