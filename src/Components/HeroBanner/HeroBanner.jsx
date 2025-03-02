import React from "react";
import logo1 from "../../assets/images/logo_1.png";
import logo2 from "../../assets/images/logo_2.png";
import logo3 from "../../assets/images/logo_3.png";
import logo4 from "../../assets/images/logo_4.png";
import logo5 from "../../assets/images/logo_5.png";
import logo6 from "../../assets/images/logo_6.png";
import "./HeroBanner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroBanner = () => {
  return (
    <section
      className="banner text-white pt-5 herobanner"
      style={{
        backgroundImage: "url('../../assets/images/banner-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1a1a1a", // Added background color fallback
      }}
    >
      <div className="position-relative DigitalMarketing">
        <div className="slidoverlay bodypx">
          <div className="container h-100">
            <div className="row align-items-center py-md-5 h-100">
              <div className="col-lg-9 tracking-in-expand text-center py-5 mx-auto">
                <h1 className="text-white tage-h-one fs-50 fw-bold">
                  Digital Marketing Company
                </h1>
                <p className="text-white pt-2">
                  More leads, more sales, and more revenue. That’s what digital
                  marketing solutions from IND Tech Mark can do for you! With a
                  tailored strategy and a data-driven approach, our digital
                  marketing company can help your business reach great heights
                  in the digital marketplace.
                </p>
                <a href="portfolio" className="btn-white mt-4 fw-bold">
                  <span>Talk about Your Project</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Slider Section */}
        <section className="bottomslide">
          <div className="py-4 text-center">
            <div className="clientSwipera">
              <div className="logo-slider">
                <div className="logo-slider-track">
                  {/* Render the logos twice for seamless scrolling */}
                  {[
                    logo1,
                    logo2,
                    logo3,
                    logo4,
                    logo5,
                    logo6,
                    logo1,
                    logo2,
                    logo3,
                    logo4,
                    logo5,
                    logo6,
                  ].map((logo, index) => (
                    <div key={index} className="logo-slide">
                      <img src={logo} alt={`Logo ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroBanner;
