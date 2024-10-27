import React from 'react'
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Form submitted successfully!");
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out to us. We'll get back to you soon.",
      icon: "success",
      confirmButtonText: "OK"
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  // Function to handle name input change
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setName(value);
    }
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
    
      <section className="contact-banner contact-ban">
        <div className="container text-center">
          <h1 className="main-h1">Contact Us</h1>
          <h4>Connect: Your Inquiries Are Important To Us</h4>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row py-5 contact-row">
            <div className="col-sm-12 col-md-12 col-12 first_col mt-2 mx-auto">
              <h2 className="text-center fw-bold fs-1 w-100 form-title">Get In Touch</h2>
              <form className="p-4 mt-5" onSubmit={handleSubmit}>

<label htmlFor="name1" className="form-label">Enter your Name</label>
<input
  type="text"
  className="form-control mb-2"
  id="name1"
  value={name}
  onChange={handleNameChange}
  placeholder="Enter your name"
  title="Please enter a valid name (only letters and spaces)."
  required
/>

<label htmlFor="email1" className="form-label">Email ID</label>
<input
  type="email"
  className="form-control mb-2"
  id="email1"
  value={email}
  onChange={handleEmailChange}
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  title="Please Enter a Valid Email Address."
  required
/>

<label htmlFor="message1" className="form-label">Enter your message</label>
<textarea
  className="form-control form-control-message mb-2"
  id="message1"
  rows="3"
  value={message}
  onChange={handleMessageChange}
  placeholder="Enter your message"
  required
></textarea>

<input
  className="my-4 btn submit-btn"
  value="Send Now"
  type="submit"
/>
</form>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-12 mx-auto align-items-center">
              <div className="box">
                <i className="fa-solid fa-location-dot fs-2 m-3"><b> ADDRESS</b></i>
                <p className=" ms-3 "><b>Branch Office:- </b>Plot no # 2929 Impress Market Saddar, KARACHI PAKISTAN</p>
                <p className=" ms-3 "><b>Main Office:- </b>Plot no # 1390 Main Shahrah-e-Faisal, KARACHI PAKISTAN</p>
              </div>
              <div className="box">
                <i className="fa-solid fa-address-book fs-2 m-3"><b> CONTACT US</b></i>
                <p className=" ms-3 fs-5"><strong>Email:</strong> <a className='fs-5' href="mailto:contact@jensendecors.com">contact@jensendecors.com</a></p>
                <p className=" ms-3 fs-5"><strong>Phone:</strong> <a className='fs-5' href="tel:+1234567890">+1 (234) 567-890</a></p>
              </div>

              <div className="box">
                <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                  <h2 className="text-center fw-bold fs-1 w-100 form-title">Follow Us</h2>
                  <div className="social-icons d-flex justify-content-center align-items-center py-5">
                    <a href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook fs-1" style={{ color: "#74C0FC" }}></i>
                    </a>
                    <a href="https://www.twitter.com/">
                    <i className="fa-brands fa-x-twitter fs-1" style={{ color: "#000000" }}></i>
                    </a> 
                    <a href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram fs-1" style={{ color: "#c854f2" }}></i>
                    </a>
                    <a href="https://www.youtube.com/">
                      <i className="fa-brands fa-youtube fs-1" style={{ color: "#e60000" }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.313992521693!2d67.14924997443067!3d24.88726914418609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1723190023477!5m2!1sen!2s"
              width="100%" height="250" style={{ borderRadius: "12px" }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" className="p-1"></iframe>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Contact

