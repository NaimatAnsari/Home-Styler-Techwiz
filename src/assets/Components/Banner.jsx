import React from 'react';
import "../../../src/index.css";
import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <>
             <section className="container-image my-5 align-content-center">
    <div className="container text-center">
      <div className="banner-content text-white">
        
        <h5 className="text-white pb-3">Get Discount Up To 25%</h5>
        <h2 className="text-white fs-1">Best Deal For Week</h2>
        <p className="text-white pb-4">
          Get up to 25% off this weak and get offer <br />Don't miss
        </p>
        <NavLink to="/Decor"><button className="main-btn2">Buy Now</button></NavLink>
      </div>
    </div>
  </section>
        </>
    )
}
export default Banner;
