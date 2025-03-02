import React from "react";

// Import images
import DiscussImg from "../../assets/images/Discussimg.svg";
import AppProcess from "../../assets/images/appProcess.svg";
import ProcessMobileView from "../../assets/images/process-mobile-view.svg";
import AppServices1 from "../../assets/images/appservices_1.svg";
import AppServices2 from "../../assets/images/appservices_2.svg";
import AppServices3 from "../../assets/images/appservices_3.svg";
import AppServices4 from "../../assets/images/appservices_4.svg";
import AppServices5 from "../../assets/images/appservices_5.svg";
import AppServices6 from "../../assets/images/appservices_6.svg";

// Reusable Button Component
const Button = ({ href, text, iconClass }) => (
  <a href={href} className="themeBtn mt-2 mt-xl-3 fw-bold">
    <span>{text}</span>
    <i className={`icon ${iconClass}`}></i>
  </a>
);

// Reusable Card Component
const Card = ({ imageSrc, title, description }) => (
  <div className="bg-white padding30 rounded16">
    <img className="d-block" src={imageSrc} alt={title} />
    <h4 className="fn-24 fw-bold pt-3 pb-2 d-block">{title}</h4>
    <p>{description}</p>
  </div>
);

// Main React Component
const AppDevelopment = () => {
  return (
    <div>
      {/* Section 1: Let’s Discuss Your Project */}
      <section className="bodypx hailwhitebg">
        <div className="redblackbg rounded30 px-md-4 psm-ph">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-7 py-5 text-md-start text-center ps-md-5">
                <h2 className="text-white fs-50 fw-400">
                  Let’s Discuss{" "}
                  <span className="text-white fw-600">Your Project</span>
                </h2>
                <p className="fn-24 text-white">
                  Get a free consultation to discuss how we will transform your
                  idea into an amazing digital product.
                </p>
                <Button
                  href="get-free-consultation"
                  text="Get free consultation"
                  iconClass="icon-arrow"
                />
              </div>
              <div className="col-md-5 text-center text-md-end pe-md-5">
                <img
                  className="my-4 pb-1"
                  src={DiscussImg}
                  alt="Discuss Project"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Mobile App Development Process */}
      <section className="bodypx py-80">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-8 text-center mb-4 mx-auto">
              <h2 className="font-40">Our Mobile App Development Process</h2>
              <p className="font-18 poppins-regular my-3">
                Partnering with a trustworthy mobile app development company
                like ours can help you get successful results. Leveraging our
                agile development process, we ensure you get a digital product
                that meets your needs and exceeds your expectations.
              </p>
            </div>
            <div className="col-md-12 mb-4">
              <img
                className="w-100 d-none d-md-block"
                src={AppProcess}
                alt="App Development Process"
              />
              <img
                className="w-100 d-black d-md-none"
                src={ProcessMobileView}
                alt="App Development Process Mobile"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose IND Tech Mark? */}
      <section className="bodypx py-80 lightgraybg">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">
              Why Choose IND Tech Mark for Mobile App Development Services?
            </h2>
            <p className="font-18 poppins-regular my-3">
              IND Tech Mark is the best mobile app development company that
              offers top-quality services to its partners. We are indeed a
              one-stop solution for providing the best mobile app development
              services.
            </p>
          </div>
        </div>
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-4 mb-4">
              <Card
                imageSrc={AppServices1}
                title="Expert Team"
                description="Our adept team of developers is tech-savvy and well-versed in integrating cutting-edge technologies to build an app that excels in the market."
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                imageSrc={AppServices2}
                title="Transparent Process"
                description="We follow an agile mobile app development process that’s open, where the details and milestones achieved for your project are shared with you."
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                imageSrc={AppServices3}
                title="On-Time Results"
                description="We stick to our timeline and avoid unnecessary delays and hurdles by following a proper workflow and making sure that it is followed strictly."
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                imageSrc={AppServices4}
                title="Global Network"
                description="We are not only limited to a particular geographical location; we extend our services to all businesses across the world looking for advanced solutions."
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                imageSrc={AppServices5}
                title="Comprehensive Services"
                description="To ensure a successful digital product, we offer end-to-end mobile app development services, including planning, designing, development, testing, and maintenance."
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                imageSrc={AppServices6}
                title="24/7 Support"
                description="To stay at the edge of an ever-evolving market, we offer top-quality services to ensure that all your issues and bugs are resolved through our 24/7 support."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
