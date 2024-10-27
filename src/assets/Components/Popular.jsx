import React from 'react'
import popular from '../../../public/img/sofa3.jpeg';
import SecondImage from '../../../public/img/beds (1).jpeg';
import ThirdImage from '../../../public/img/beds (2).jpeg';
import ForthImage from '../../../public/img/cabinets (2).jpeg';
import FifthImage from '../../../public/img/chairs (2).jpeg';
import SixImage from '../../../public/img/Coffee (2).jpeg';
import SevenImage from '../../../public/img/couches (5).jpeg';
function Popular() {
  return (
    <div>
    {/* <!-- popular product --> */}
<div className="container-fluid">
   <div className="container-xxl my-5">
       <h3 className="text text-center fw-bold fs-1 my-5 text-secondary">Popular Products</h3>
       <div className="popular-items-wrapper">
           <div className="popular-items pb-5">
               <img src={popular} alt=""/>
               <p className="mb-0"><b>Side Sofa</b></p>
               <span>
                   <i className='bx bxs-star text-'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star-half'></i>
               </span> <br />
               <p>$4500</p>
           </div>
           <div className="popular-items pb-5">
               <img src={SecondImage} alt=""/>
               <p className="mb-0"><b>Bed</b></p>
               <span>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star-half'></i>
                   <i className='bx bx-star'></i>
               </span>
               <p>$1500</p>
           </div>
           <div className="popular-items pb-5">
               <img src={ThirdImage} alt=""/>
               <p className="mb-0"><b>Bed</b></p>
               <span>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bx-star'></i>
                   <i className='bx bx-star'></i>
               </span>
               <p>$1000</p>
           </div>
           <div className="popular-items pb-5">
               <img src={ForthImage} alt=""/>
               <p className="mb-0"><b>Cabinets</b></p>
               <span>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bx-star'></i>
                   <i className='bx bx-star'></i>
               </span>
               <p>$500</p>
           </div>
           <div className="popular-items pb-5">
               <img src={FifthImage} alt=""/>
               <p className="mb-0"><b>Chair</b></p>
               <span>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star-half'></i>
                   <i className='bx bx-star'></i>
               </span>
               <p>$750</p>
           </div>
           <div className="popular-items pb-5">
               <img src={SixImage} alt=""/>
               <p className="mb-0"><b>Coffie Table</b></p>
               <span>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star-half'></i>
                   <i className='bx bx-star'></i>
                   <i className='bx bx-star'></i>
               </span>
               <p>$150</p>
           </div>
           <div className="popular-items pb-5">
               <img src={SevenImage} alt=""/>
               <p className="mb-0"><b>Couch</b></p>
               <span>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bxs-star'></i>
                   <i className='bx bx-star'></i>
               </span>
               <p>$100</p>
           </div>
       </div>
   </div>
</div>
</div>
  )
}

export default Popular