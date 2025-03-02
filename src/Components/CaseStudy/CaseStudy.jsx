import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CaseStudy.css"; // Import the CSS file
import Case1Image from "../../assets/images/Case_1.jpg"; // Import images
import LeftArrow from "../../assets/images/left.png"; // Import left arrow
import RightArrow from "../../assets/images/right.png"; // Import right arrow

const CaseStudySection = () => {
  return (
    <section className="bodypx section-case-study lightgraybg py-80">
      <div className="container-fluid mi-container">
        <div className="row align-items-md-center">
          <div className="col-md-7 text-center text-sm-start">
            <h2>Case Study</h2>
            <p>
              Explore how our mobile app development services have helped our
              clients transform their businesses and achieve tangible results.
            </p>
          </div>
          <div className="col-md-5 text-end d-sm-block d-none">
            <a
              href="javascript:void(0)"
              className="btn-darkblack fw-bold fn-16"
            >
              <span>EXPLORE MORE</span>
              <i className="icon icon-arrow"></i>
            </a>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 overflow-hidden our-case-study-main">
            <Swiper
              className="CaseStudySlider mt-40 br-24"
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="our-work br-30">
                  <div className="our-work-left">
                    <div className="portfolio-img h-100">
                      <img
                        src={Case1Image}
                        alt=""
                        className="img-fluid br-24"
                      />
                    </div>
                  </div>
                  <div className="our-work-right">
                    <span className="fn-18 fw-600">Case Study</span>
                    <div className="fn-24 fw-bold mt-2">
                      Web, Ecommerce, Apps
                    </div>
                    <ul className="list-unstyled design-development">
                      <li className="text-white">UI/UX Design</li>
                      <li className="text-white">Backend Development</li>
                    </ul>
                    <p className="font-18 mb-0">
                      1-800-Flowers.com, Inc. is a floral and gourmet foods gift
                      retailer and distribution company in the United States. It
                      was one of the first retailers to use a 24 x 7 toll-free
                      telephone number and the Internet for direct sales to
                      consumers.
                    </p>
                    <span className="custom-border"></span>
                    <div className="app-features lightgraybg mb-3 d-none d-md-block">
                      <ul className="list-unstyled">
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                      </ul>
                    </div>
                    <a
                      href=""
                      className="btn-darkblack fw-bold fn-16 mt-auto mt-3"
                      style={{ width: "200px" }}
                    >
                      <span>know more</span>
                      <i className="icon icon-arrow"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="our-work br-30">
                  <div className="our-work-left">
                    <div className="portfolio-img h-100">
                      <img
                        src={Case1Image}
                        alt=""
                        className="img-fluid br-24"
                      />
                    </div>
                  </div>
                  <div className="our-work-right">
                    <span className="fn-18 fw-600">Case Study</span>
                    <div className="fn-24 fw-bold mt-2">
                      Web, Ecommerce, Apps
                    </div>
                    <ul className="list-unstyled design-development">
                      <li className="text-white">UI/UX Design</li>
                      <li className="text-white">Backend Development</li>
                    </ul>
                    <p className="font-18 mb-0">
                      1-800-Flowers.com, Inc. is a floral and gourmet foods gift
                      retailer and distribution company in the United States. It
                      was one of the first retailers to use a 24 x 7 toll-free
                      telephone number and the Internet for direct sales to
                      consumers.
                    </p>
                    <span className="custom-border"></span>
                    <div className="app-features lightgraybg mb-3 d-none d-md-block">
                      <ul className="list-unstyled">
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                        <li>10k+ Active Users</li>
                      </ul>
                    </div>
                    <a
                      href=""
                      className="btn-darkblack fw-bold fn-16 mt-auto mt-3"
                      style={{ width: "200px" }}
                    >
                      <span>know more</span>
                      <i className="icon icon-arrow"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Navigation Buttons */}
            <div className="swipe-btn-outer btn-wrap ">
              <div className="swiper-button-prev com-btn">
                <span>
                  <img src={LeftArrow} alt="Previous" />
                </span>
              </div>
              <div className="swiper-button-next com-btn">
                <span>
                  <img src={RightArrow} alt="Next" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
