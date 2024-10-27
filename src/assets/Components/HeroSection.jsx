import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
     <section className="py-0">
    <div className="section-bg">
      <div className="container">
        <div className="row py-3">
          <div className="col-sm-12 col-md-12 col-lg-6 col-12 mt-5 px-5">
            <h1 className="sec-h1 fw-bold">HOME STYLER</h1>
            <p className="sec-p mt-3">
            Home Styler is here to turn your home into a stylish, comfortable space that reflects your personal taste. From modern designs to cozy setups, our expert team works closely with you to bring your vision to life. We focus on quality, detail, and functionality, ensuring your home looks great and feels even better. Let us create a space you’ll love to live in!
            </p>
            <div className="sec-btn mt-4">
              <NavLink to="/furniture"><button className="shop-btn"><span>Shop Now &rarr;</span></button></NavLink>
            </div>
           {/* counter */}
            <div className="my-3 mt-5">
              <div className="row text-center d-flex">
                <div className="hero-counter col m-2">
                  <h2>
                    <span className="digit-box" data-value="400">24/7</span>
                  </h2>
                  <p>Support</p>
                </div>
                <div className="hero-counter col m-2">
                  <h2>
                    <span className="digit-box" data-value="600">600</span>+
                  </h2>
                  <p>Satisfied Clients</p>
                </div>
                <div className="hero-counter col m-2">
                  <h2>
                    <span className="digit-box" data-value="100">100</span>+
                  </h2>
                  <p>Unique Styles</p>
                </div>
              </div>
            </div>
        
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 mt-5 text-center mx-auto">
            <img src="../public/img/heroProductimg.png" className="img img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default HeroSection