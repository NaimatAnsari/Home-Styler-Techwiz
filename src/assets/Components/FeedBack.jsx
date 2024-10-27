import React from 'react'
import FeedBackImage from "../../../public/img/Feedbackimg.png"

function FeedBack() {
  return (
    <>
    <div className='feedback-banner d-flex align-items-center justify-content-center '>
      <div className="container d-flex align-items-center justify-content-center">
       <div className="h1-div mb-5">
       <h1>Feedback</h1>
       <h4>Please share your feedback to help us improve! </h4>
       </div>
       

      </div></div>
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="container">
      <h1 className="fw-bold mb-3 fs-1 text-center" >Custmer Feedback</h1>
      <hr className="w-25 mx-auto"/>
        <div className="row py-5">
          <div className="col-md-12 col-lg-6 col-sm-12 col-12 text-center">
          <img src="../public/img/Feedbackimg.png" alt="" style={{ width: "100%" }} />
          
          </div>

          
          <div className="col-md-12 col-lg-6 col-sm-12 col-12 m-auto">
            <div className="feedback-card  text-dark p-4 rounded shadow-lg mb-4">
              <h2 className="text-center fw-bold fs-1 ">Share Your Feedback</h2>

              <form className=" p-2" action="" id="myform">
              <label htmlFor="name1" className="form-label">Enter your Name</label>
              <input type="text" class="form-control mb-2" id="name1" pattern="[A-Za-z\s]+" title="Please Enter a Valid Name."  required/>
              <label htmlFor="email1" className="form-label">Email ID</label>
              <input className="form-control mb-2" id="email1" type="email" 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please Enter a Valid Email Address." required />

              <label htmlFor="message1" className="form-label">Enter your Feed</label>
              <textarea type="text" className="form-control form-control-message mb-2" id="message1" rows="3"
                required></textarea>
              
              <input type="submit" className="my-4 btn submit-btn" value="Send Now" />
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FeedBack