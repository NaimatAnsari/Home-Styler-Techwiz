import React,{useState} from 'react'
import FeedBackImage from "../../../public/assets/image/Feedbackimg.png"

function FeedBack() {

  const [fname, setFname] = useState("");
  const [femail, setFemail] = useState("");
  const [fmessage, setFmessage] = useState("");

  const fHandleSubmit = (event) => {
    event.preventDefault();
    // alert("Form submitted successfully!");
    Swal.fire({
      title: "Feedback Submitted!",
      text: "Thank you for sharing your valuable feedback. We truly appreciate your effort to help us improve!",
      icon: "success",
      confirmButtonText: "Close"
    });
    setFname("");
    setFemail("");
    setFmessage("");
  };

    // Function to handle name input change
    const handleFNameChange = (e) => {
      const value = e.target.value;
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFname(value);
      }
    };
  
    // Function to handle email input change
    const handleFEmailChange = (e) => {
      setFemail(e.target.value);
    };
  
    // Function to handle message input change
    const handleFMessageChange = (e) => {
      setFmessage(e.target.value);
    };
  

  return (
    <>
    <div className='feedback-banner d-flex align-items-center justify-content-center '>
      <div className="container d-flex align-items-center justify-content-center">
       <div className="h1-div mb-5 text-center">
       <h1 className='page-h1'>Feedback</h1>
       <h4>Please share your feedback to help us improve! </h4>
       </div>
       

      </div></div>
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="container">
      <h1 className="fw-bold mb-3 fs-1 text-center" >Custmer Feedback</h1>
      <hr className="w-25 mx-auto"/>
        <div className="row py-5">
          <div className="col-md-12 col-lg-6 col-sm-12 col-12 text-center">
          <img src={FeedBackImage} alt="" style={{ width: "100%" }} />
          
          </div>

          
          <div className="col-md-12 col-lg-6 col-sm-12 col-12 m-auto">
            <div className="feedback-card  text-dark p-4 rounded shadow-lg mb-4">
              <h2 className="text-center fw-bold fs-1 ">Share Your Feedback</h2>

              <form className=" p-2" onSubmit={fHandleSubmit} id="myform">
              <label htmlFor="name1" className="form-label">Enter your Name</label>
              <input type="text" class="form-control mb-2" id="fname1" pattern="[A-Za-z\s]+" value={fname} onChange={handleFNameChange} placeholder='Enter your name' title="Please Enter a Valid Name."  required/>
              <label htmlFor="email1" className="form-label">Email ID</label>
              <input className="form-control mb-2" id="femail1" type="email" value={femail}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please Enter a Valid Email Address."  placeholder='Enter your email' onChange={handleFEmailChange} required />

              <label htmlFor="message1" className="form-label">Enter your Feedback</label>
              <textarea type="text" className="form-control form-control-message mb-2" value={fmessage} onChange={handleFMessageChange} placeholder='Enter your feedback' id="fmessage1" rows="3"
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