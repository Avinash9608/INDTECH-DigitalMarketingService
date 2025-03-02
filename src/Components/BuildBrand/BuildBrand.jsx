import React from "react";
import illustration from "../../assets/images/Illustration.svg";

const BuildBrand = () => {
  return (
    <section className="bodypx py-80">
      <div className="container-fluid mi-container">
        <div className="row align-items-md-center">
          <div className="col-md-8 mb-4">
            <div className="col-lg-9">
              <h2 className="font-40 fw-400">
                <strong>Build Brand</strong> Identity & Accelerate Growth With
                Our Digital Marketing Services
              </h2>
              <p className="font-18 poppins-regular my-3">
                Whether it's generating new leads, building your brand’s
                identity, or boosting your overall revenue, digital marketing
                can help you gain a competitive edge in the marketplace. Being a
                top digital marketing company, our team of skilled experts can
                help you attain all your goals for your business. With our
                commitment to dedication and customer-first ideology, our
                solutions can take your business to the next level.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="appdevbggar padding30 rounded16">
              <img
                className="d-block w-75 m-auto"
                src={illustration}
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildBrand;
