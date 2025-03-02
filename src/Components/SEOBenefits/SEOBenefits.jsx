import React from "react";
import tickCircleIcon from "../../assets/images/tick-circle.svg"; // Adjust the path as needed
import cmsImg from "../../assets/images/cms.svg"; // Adjust the path as needed

const SEOBenefits = () => {
  return (
    <section className="bodypx py-80 lightgraybg">
      <div className="container-fluid mi-container">
        <div className="row align-items-md-center">
          {/* Left Column: Content */}
          <div className="col-md-8 mb-4">
            <div className="col-lg-9">
              <h2 className="font-40 fw-400">
                <strong> What are the benefits of SEO </strong>
                to your website?
              </h2>
              <ul className="list-unstyled mt-4 mb-4 ps-md-0 ps-1">
                <li className="font-18 d-flex gap-2 align-items-start">
                  <img src={tickCircleIcon} alt="Tick" className="me-2" />
                  Helps enhance the overall customer experience on your website
                </li>
                <li className="font-18 d-flex gap-2 align-items-start mt-3">
                  <img src={tickCircleIcon} alt="Tick" className="me-2" />
                  Can Improve your page rankings on Google, maximise traffic and
                  conversions
                </li>
                <li className="font-18 d-flex gap-2 align-items-start mt-3">
                  <img src={tickCircleIcon} alt="Tick" className="me-2" />
                  Helps you improve the functionality and performance of your
                  website
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-4 mb-4">
            <div className="appdevbggar padding30 rounded16">
              <img className="d-block w-75 m-auto" src={cmsImg} alt="CMS" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOBenefits;
