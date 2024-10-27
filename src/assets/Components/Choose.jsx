import React from 'react'
function Choose() {
  return (
    <>
     {/* <!-- Why Choose Us Section Start --> */}
     <div className="container pt-5">
     <div className="text-center">
        <h2 className="text-center fw-bold text-black">Why Choose US
        </h2>
        <hr className="w-25 mx-auto"/>
        <p className="text-center px-4 "><i>Choose Jensen Decors for unparalleled elegance and exceptional quality in
            home decor.</i></p>
      </div>
     </div>
  <section className="container pt-3">
    <div className="container text-center overflow-auto">
      <div className="swiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
        <div className="swiper-wrapper d-flex" id="swiper-wrapper-27494181adf1835d" aria-live="off"
          >

          <div className="swiper-slide fe-box fe-box-1 swiper-slide-active"  style={{width: "261.667px", marginRight: "30px"}}>
            {/* <img src="image/Feauters/f1.png" alt=""/> */}
            <h6>Free Shipping</h6>
          </div>
          <div className="swiper-slide fe-box fe-box-2 swiper-slide-next"
            style={{width: "261.667px", marginRight: "30px"}}>
            {/* <img src="image/Feauters/f2.png" alt=""/> */}
            <h6>Online Order</h6>
          </div>
          <div className="swiper-slide fe-box fe-box-3" role="group" 
            style={{width: "261.667px", marginRight: "30px"}}>
            {/* <img src="image/Feauters/f3.png" alt=""/> */}
            <h6>Save Money</h6>
          </div>
          <div className="swiper-slide fe-box fe-box-4" role="group" 
            style={{width: "261.667px", marginRight: "30px"}}>
            {/* <img src="image/Feauters/f4.png" alt=""/> */}
            <h6>Promotions</h6>
          </div>
          <div className="swiper-slide fe-box fe-box-5" role="group" 
            style={{width: "261.667px", marginRight: "30px"}}>
            {/* <img src="image/Feauters/f5.png" alt=""/> */}
            <h6>Happy Sell</h6>
          </div>
          <div className="swiper-slide fe-box fe-box-6" role="group" 
            style={{width: "261.667px", marginRight: "30px"}}>
            {/* <img src="image/Feauters/f6.png" alt=""/> */}
            <h6>24/7 Support</h6>
          </div>
        </div>
        {/* <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span> */}
      </div>
    </div>
  </section>
  {/* <!-- Why Choose Us Section End --> */}
    </>
  )
}

export default Choose