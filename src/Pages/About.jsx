import React from 'react';

const About = () => {
  return (
    <>
      <section className='about-banner'>
        <div className="container text-center text-white">
          <h1 className="main-h1">About Us</h1>
          <h4>Welcome to Home Styler, your go-to destination for stylish home decor</h4>
        </div>
      </section>
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row">

            <div className="col-md-12 col-lg-6 col-sm-12 col-12 ">
              <h1 className="fs-1"><b>DO YOU KNOW HOME STYLER</b></h1>
              <p>
                <b>HomeStyler</b> is an intuitive, web-based interior design platform that empowers users to create and visualize beautiful spaces in 2D and 3D. With a vast library of furniture, decor, and fixtures, users can explore endless design possibilities for their homes, offices, or other spaces. The platform's easy-to-use drag-and-drop interface allows anyone—from homeowners to professionals—to design, plan, and customize interiors without prior experience. HomeStyler offers realistic 3D renderings, enabling users to see their designs come to life before making real-world changes. Whether you're looking to remodel a room or design from scratch, HomeStyler simplifies the process. Its community of users and professionals share designs, ideas, and inspiration. Trusted by millions, HomeStyler is your go-to tool for all things interior design. </p>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 col-12 px-5">
              <img className='w-100 py-3' src="../public/img/Aboutimg.jpg" alt="" />
            </div>
          </div>

          <div className="row py-5 flex-column-reverse flex-md-row flex-lg-row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-12 ">
              <img src="../public/img/ourvision.png" alt="" className='w-100 ' />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-12 ">

              <h3 className="fs-1 fw-bolder ">Our Vision</h3>
              <p>
                Our vision at Home Styler is to create a world where everyone has the tools and inspiration to transform their living spaces into a reflection of their individuality. We strive to become the leading platform for home styling and design, where creativity knows no bounds, and every home can be as unique and beautiful as the people who live in it.
              </p>

            </div>
          </div>

          <div className="row">


            <h3 className="fs-1 fw-bolder text-center">Our Mission</h3>
            <p className='text-center px-5'>
              At Home Styler, our mission is simple yet profound:
              To inspire and empower individuals to create beautiful, personalized living spaces with ease and confidence.
              We believe that everyone deserves a home that reflects their unique style and personality. That's why we provide accessible, intuitive design tools that make it easy for anyone—whether a homeowner, designer, or enthusiast—to visualize, plan, and transform their space. Through innovation and creativity, we aim to revolutionize the way people approach interior design, offering inspiration and professional-quality results at their fingertips.              </p>



          </div>
          <div className="row">
            <div className="col-12 py-5">
              <h3 className="fs-1 fw-bolder text-center">Customer Support Services</h3>
              <hr className="w-25 mx-auto" />
            </div>

            <div className="col-md-6 col-lg-3 fs-3 text-center py-2  fw-bold">
              <i class="fa-solid fa-truck fs-1 text-center ">
                <p className='fs-2 mt-3'>Cash Home Delivery</p>
              </i>
            </div>
            <div className="col-md-6 col-lg-3 fs-3 text-center py-2 fw-bold">
              <i class="fa-solid fa-person-walking-arrow-loop-left fs-1 text-center ">
                <p className='fs-2 mt-3'>Easy Return</p>
              </i>
            </div>
            <div className="col-md-6 col-lg-3 fs-3 text-center py-2 fw-bold">
              <i class="fa-solid fa-medal fs-1 text-center ">
                <p className='fs-2 mt-3'>Quality Assurance</p>
              </i>
            </div>
            <div className="col-md-6 col-lg-3 fs-3 text-center py-2 fw-bold">
              <i class="fa-solid fa-shield-halved fs-1 text-center ">
                <p className='fs-2 mt-3'>Money Back Guarantee</p>
              </i>
            </div>
          </div>
        </div>
      </div>


      <div className="container mb-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-12">
            <div className="explore-room">
              <div className="text-center">
                <h2 className="text-center fw-bold text-black fs-1">Frequently Asked Questions</h2>
                <hr className="w-25 mx-auto" />
              </div>
              <p className="text-center Categ-para">
                <i>Have questions? Find answers to common questions about our products and services. We are here to help!</i>
              </p>

              <div className="accordion accordion-flush mt-5 border" id="accordionFlushExample">
                <div className="accordion-item faq">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-white faq-btn" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <h5 className="text-black">What is HomeStyler?</h5>
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p>HomeStyler is an online platform that allows users to design and visualize interior spaces. It provides tools for creating 2D and 3D room layouts, furnishing and decorating with a wide range of furniture and decor options, and visualizing the design with realistic renderings. It’s popular among homeowners, interior designers, and professionals who want to experiment with different design ideas for homes or offices.
                        Users can drag and drop furniture, experiment with different color schemes, and view their designs in both 2D and 3D perspectives, making it easier to plan interior spaces.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item faq">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-white faq-btn" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <h5 className="text-black">What types of products do you offer?</h5>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p> <b>HomeStyler</b>  offers a variety of digital products in the following categories: <br />

                        1.  <b>Furniture:</b> Virtual options for sofas, chairs, tables, beds, and other furniture pieces to design different rooms.<br />

                        2.   <b>Home Decor:</b> A wide selection of decorative items such as rugs, artwork, curtains, and accessories to enhance the interior designs.<br />

                        3. <b>Bathroom</b>: Virtual design tools for bathroom fixtures, including vanities, bathtubs, sinks, and tiles.<br />

                        4. <b>Lighting:</b> A range of lighting options such as chandeliers, lamps, ceiling lights, and wall sconces to create ambiance in spaces.<br />

                        5. <b>Kitchen:</b> Tools for designing kitchen layouts with virtual cabinetry, countertops, appliances, and storage solutions.<br />

                        These categories help users create detailed and personalized interior designs for their spaces.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item faq">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-white border-0 faq-btn" type="button"
                      data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                      aria-controls="flush-collapseThree">
                      <h5 className="text-black">How can I contact customer support?</h5>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p>To contact <b>HomeStyler</b> customer support, you can:<br />

                        1. <b>Email:</b> Reach out via their official support email, typically available on their website's contact page.<br />

                        2. <b>Help Center:</b> Visit the <b>HomeStyler Help Center</b> or support page for FAQs, tutorials, and troubleshooting guides.<br />

                        3. <b>Community Forum:</b> Engage with the <b>HomeStyler community</b> forum, where users and experts provide assistance.<br />

                        4. <b>Social Media:</b> You can also contact HomeStyler through their social media channels for updates or direct queries.<br />

                        Check their website for the most accurate contact information.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
