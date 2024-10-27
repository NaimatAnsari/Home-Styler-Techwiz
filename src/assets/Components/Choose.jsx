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
  <div className="container text-center scroll">
  <div className="swiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
    <div className="swiper-wrapper d-flex">
      <div className="swiper-slide fe-box fe-box-1" style={{ width: "261.667px", marginRight: "30px" }}>
      <i className='bx bxs-package fs-2'></i> <br />
        <h6>Free Shipping</h6>
      </div>
      <div className="swiper-slide fe-box fe-box-2" style={{ width: "261.667px", marginRight: "30px" }}>
      <i className='bx bx-wifi fs-2'></i> <br />
        <h6>Online Order</h6>
      </div>
      <div className="swiper-slide fe-box fe-box-3" style={{ width: "261.667px", marginRight: "30px" }}>
      <i className='bx bx-wallet fs-2' ></i> <br />
        <h6>Save Money</h6>
      </div>
      <div className="swiper-slide fe-box fe-box-4" style={{ width: "261.667px", marginRight: "30px" }}>
      <i className='bx bxl-product-hunt fs-2' ></i> <br />
        <h6>Promotions</h6>
      </div>
      <div className="swiper-slide fe-box fe-box-5" style={{ width: "261.667px", marginRight: "30px" }}>
      <i className='bx bx-happy-heart-eyes fs-2' ></i> <br />
        <h6>Happy Sell</h6>
      </div>
      <div className="swiper-slide fe-box fe-box-6" style={{ width: "261.667px", marginRight: "30px" }}>
      <i className='bx bx-support fs-2' ></i> <br />
        <h6>24/7 Support</h6>
      </div>
    </div>
  </div>
</div>

  </section>
  {/* <!-- Why Choose Us Section End --> */}
    </>
  )
}

export default Choose