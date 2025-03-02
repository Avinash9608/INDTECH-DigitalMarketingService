import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import leftArrow from "../../assets/images/left.png"; // Adjust the path as needed
import rightArrow from "../../assets/images/right.png"; // Adjust the path as needed
import searchIcon from "../../assets/images/search.svg"; // Adjust the path as needed
import socialMediaIcon from "../../assets/images/Socialmm.svg"; // Adjust the path as needed
import paidAdsIcon from "../../assets/images/PaidAds.svg"; // Adjust the path as needed

const WeServeSection = () => {
  // Data for the slides
  const services = [
    {
      icon: searchIcon,
      title: "Search Engine Optimization",
      description:
        "To properly optimize your website for search engines, our team of SEO professionals can identify and fix any issues that may be stopping you from achieving your goal. We’ll provide you with a complete report on every issue on your website.",
      link: "seo",
    },
    {
      icon: socialMediaIcon,
      title: "Social Media Marketing",
      description:
        "Are you willing to expand your market on several social media channels? We are experts in building social media campaigns to help your business grow and engage your followers. We even help you develop custom brand management and paid advertising strategies.",
      link: "social-media",
    },
    {
      icon: paidAdsIcon,
      title: "PPC",
      description:
        "Get hold of your customers quickly with PPC campaigns. Our PPC experts are skilled and certified and create targeted ad copies, optimize bidding strategies, and monitor ROI for each keyword. This way, you can drive and generate high-volume leads and traffic.",
      link: "digital-marketing-services",
    },
    {
      icon: paidAdsIcon,
      title: "Content Marketing",
      description:
        "At IND Tech Mark, we make tailored content to meet specific goals and requirements of businesses, which tends to engage and inform the target audience. Our content marketing services have an engagement nature that calls upon the reader’s actions.",
      link: "digital-marketing-services",
    },
    {
      icon: paidAdsIcon,
      title: "Online Reputation Management",
      description:
        "Your online reputation can either make or break your success. Improve your reputation and reap lucrative rewards with our professionals. We leverage state-of-the-art online reputation management strategies to streamline your practices and generate more positive reviews.",
      link: "digital-marketing-services",
    },
    {
      icon: paidAdsIcon,
      title: "App Store Optimization",
      description:
        "Willing to get a great flow of organic downloads and a lot of traffic on your app? At IND Tech Mark, we put our experience and expertise into practice and deliver top results for your app. We employ successful strategies to make your app more visible and successful.",
      link: "digital-marketing-services",
    },
    {
      icon: paidAdsIcon,
      title: "Email Marketing",
      description:
        "Choosing us as your email marketing partner can make your business stand out in the market. We create personalized email newsletters to let your emails land in your inbox and influence customers to take the desired action. Our expertise can potentially help you build a subscriber list.",
      link: "digital-marketing-services",
    },
  ];

  return (
    <section className="sec-we-serve overflow-hidden">
      <div className="we-serve bg-dark py-80">
        <div className="container text-white text-center">
          <h2 className="font-40 mb-2 we-serve__title">
            Our End-to-End Digital Marketing Services
          </h2>
          <div className="we-serve__text mx-auto font-18 mt-3">
            <p>
              At IND Tech Mark, we follow a systematic approach to ensure all
              our digital marketing efforts deliver lucrative results. Utilize
              our top-notch digital marketing services, and let us increase your
              traffic and retention rates.
            </p>
          </div>
        </div>
        <div className="container-fluid custom-ind-slider pe-0">
          <div className="we-serve__inner bg-black-slider">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: ".we-serve__slider-button-prev",
                nextEl: ".we-serve__slider-button-next",
              }}
              breakpoints={{
                576: { slidesPerView: 1 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="we-serve__slider"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="we-serve__item br-24">
                    <div className="ongoing-left-icon bg-pink">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3 className="fn-24 text-white mt-3 mb-2 fw-bold">
                      {service.title}
                    </h3>
                    <p className="font-18 text-white pb-2">
                      {service.description}
                    </p>
                    <div>
                      <a
                        href={service.link}
                        className="btn-black btn-black--white-border mt-2 mt-xl-3 fw-bold"
                      >
                        <span>read more</span>
                        <i className="icon icon-arrow"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="we-serve__nav d-sm-flex d-black mt-5 justify-content-between">
              <div className="d-flex gap-3 ms-auto">
                <div
                  className="we-serve__slider-button-prev"
                  role="button"
                  aria-label="Previous slide"
                >
                  <span>
                    <img src={leftArrow} alt="Previous" />
                  </span>
                </div>
                <div
                  className="we-serve__slider-button-next"
                  role="button"
                  aria-label="Next slide"
                >
                  <span>
                    <img src={rightArrow} alt="Next" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeServeSection;
