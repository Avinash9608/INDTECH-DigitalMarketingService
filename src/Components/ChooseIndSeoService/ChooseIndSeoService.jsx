import React from "react";
// import './ChooseIndSeoService.css';

const ChooseIndSeoService = () => {
  return (
    <section className="sec-we-serve overflow-hidden">
      <div className="bodypx we-serve bg-dark py-80 pb-200">
        <div className="container text-white text-center">
          <h2 className="font-40 mb-2 we-serve__title">
            Why Choose INDTechMark for SEO Services?
          </h2>
          <div className="we-serve__text mx-auto font-18 mt-3">
            <p>
              With a proven track record of delivering creative UI and UX design
              services and solutions, we focus on crafting user-friendly design
              interfaces that enhance your brand image, increase user
              engagement, and drive better conversions.
            </p>
          </div>
        </div>
        <div className="container-fluid custom-ind-slider">
          <div className="row">
            {[
              {
                title: "Dedicated marketing support",
                description:
                  "The moment you are onboarded, you become our center focus.",
              },
              {
                title: "Complete client satisfaction",
                description:
                  "Your satisfaction from our work is our primary modus operandi.",
              },
              {
                title: "Full performance tracking",
                description:
                  "You will always know how the project is moving in real-time.",
              },
              {
                title: "Long-term success",
                description:
                  "The efforts we put in today will show its impact forever.",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-3 mt-md-0 mt-4">
                <div className="we-serve__item br-24">
                  <h4 className="fn-24 text-white mt-3 mb-2 fw-bold">
                    {item.title}
                  </h4>
                  <p className="font-18 text-white pb-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bodypx py-80 pt-0 hailfbg">
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
                <a
                  href="get-free-consultation"
                  className="themeBtn mt-2 mt-xl-3 fw-bold"
                >
                  <span>Get free consultation</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
              <div className="col-md-5 text-center text-md-end pe-md-5">
                <img
                  className="my-4 pb-1"
                  src="images/Discussimg.svg"
                  alt="Discuss Project"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ChooseIndSeoService;
