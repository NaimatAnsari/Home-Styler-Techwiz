import React from 'react'
import furnitureData from './data.json';
import { useParams } from 'react-router-dom';


function ProductDetail() {
    const { id } = useParams();

    const findData = furnitureData.find(data=> data.id == id);
    // console.log(findData);
    

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="h-25" src={findData.image} alt="Product" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="product-title">
                            {findData.title}
                        </h2>
                        <div className="row">
                            <div className="col-6 fw-semibold">{findData.price}</div>
                            <div className="col-6 text-center">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bx-star'></i>
                            </div>
                        </div>
                        <p className="mt-2">
                            {findData.description}
                        </p>
                        <div className="row">
                            <div className="col-12 d-flex">
                                <div className="hover fw-semibold px-3 py-1 mx-1 border">XS</div>
                                <div className="hover fw-semibold px-3 py-1 mx-1 border">S</div>
                                <div className="hover fw-semibold px-3 py-1 mx-1 border">M</div>
                                <div className="hover fw-semibold px-3 py-1 mx-1 border">L</div>
                                <div className="hover fw-semibold px-3 py-1 mx-1 border">XL</div>
                            </div>
                            <div className="product-quantity">
                                <div className="product-quantity-title mt-2">Qty:</div>
                                <input
                                    className="product-quantity-title mt-2"
                                    style={{ width: '50px', textAlign: 'center' }}
                                    type="number"
                                    maxLength="1"
                                    value="1"
                                />
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button
                                        style={{ backgroundColor: 'grey' }}
                                        type="button"
                                        className="btn w-100 mt-3 text-white"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >
                                        ADD TO CART
                                    </button>
                                </div>

                                {/* Modal Start */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header bg-secondary">
                                                <h1 className="modal-title fs-5 ms-auto" id="exampleModalLabel">Your Item Has Been Ordered.</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <i className="bi bi-check-circle fs-1 d-flex align-items-center justify-content-center py-3 modalIcon"></i>
                                                <h2 className='fw-bolder text-center'>Done</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal End */}

                                <div className="col-12 mt-2 d-flex gap-2 mx-auto">
                                    <p className="fw-semibold btn-btn-outline-dark btn border-black btn w-30 mt-3">
                                        Order By Phone: 03128838912
                                    </p>
                                    <p className="fw-semibold btn-btn-outline-dark btn border-black btn w-30 mt-3">
                                        <a className="text-dark" style={{ textDecoration: 'none' }} href="/contact">Find my Shop Location</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h4 className="mt-3">About This Item</h4>
                        <p>
                            Just as the sun’s rays radiate outward, casting light in every direction, so too does the Tiffany Soleste® engagement ring. With a scintillating halo of brilliant bead-set diamonds and a striking pear-shaped center stone, light is gathered and mirrored throughout the design, resulting in an unrivaled display of brilliance.
                            <br />
                            A unique hybrid, the pear shape combines the round brilliant and marquise cuts to form a tapered teardrop. Made popular in the 18th century, the pear shape was said to represent tears of joy.
                            <br />
                            At Tiffany, we ethically source our diamonds. Integrity and social responsibility are at the core of our sourcing practices.
                        </p>
                    </div>
                </div>
            </div>


            <section id="testimonals">

                <div className="testimonial-heading">
                    <span className='fw-bolder fs-1'>REVIEW & RATING</span>
                    
                </div>

                <div className="testimonial-box-container">


                    <div className="testimonial-box">

                        <div className="box-top">

                            <div className="profile">

                                <div className="profile-img">
                                    <img src="images/image 1.png" />
                                </div>

                                <div className="Name-user">
                                    <b>NAIMAT ALI</b>
                                    <span>naimatansari31@gmail.come</span>
                                </div>
                            </div>

                            <div className="reviews">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star-half' ></i>

                            </div>
                        </div>

                        <div className="client-comment">
                            <p>Best product to ever dolor, sit amet consectetur adipisicing elit. Nemo, nesciunt Lorem ipsum dolor sit amet.</p>
                        </div>


                    </div>


                    <div className="testimonial-box">

                        <div className="box-top">

                            <div className="profile">

                                <div className="profile-img">
                                    <img src="images/2image.png" />
                                </div>

                                <div className="Name-user">
                                    <b>MD KAMRAN</b>
                                    <span>kamrannadeem113@gmail.com</span>
                                </div>
                            </div>

                            <div className="reviews">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star-half' ></i>

                            </div>
                        </div>

                        <div className="client-comment">
                            <p>Best product to ever dolor, sit amet consectetur adipisicing elit. Nemo, nesciunt Lorem ipsum dolor sit amet.</p>
                        </div>


                    </div>


                    <div className="testimonial-box">

                        <div className="box-top">

                            <div className="profile">

                                <div className="profile-img">
                                    <img src="images/3image.png" />
                                </div>

                                <div className="Name-user">
                                    <b>MD SHAYAN</b>
                                    <span>shayanjamal142005@gmail.com</span>
                                </div>
                            </div>

                            <div className="reviews">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star-half' ></i>

                            </div>
                        </div>


                        <div className="client-comment">
                            <p>Best product to ever dolor, sit amet consectetur adipisicing elit. Nemo, nesciunt Lorem ipsum dolor sit amet.</p>
                        </div>


                    </div>


                    <div className="testimonial-box">

                        <div className="box-top">

                            <div className="profile">

                                <div className="profile-img">
                                    <img src="images/4image.png" />
                                </div>

                                <div className="Name-user">
                                    <b>RIZWAN TAHIR</b>
                                    <span>choudryrizwan786@gmail.com</span>
                                </div>
                            </div>

                            <div className="reviews">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star-half' ></i>

                            </div>
                        </div>


                        <div className="client-comment">
                            <p>Best product to ever dolor, sit amet consectetur adipisicing elit. Nemo, nesciunt Lorem ipsum dolor sit amet.</p>
                        </div>


                    </div>


                    <div className="testimonial-box">

                        <div className="box-top">

                            <div className="profile">

                                <div className="profile-img">
                                    <img src="images/image5.png" />
                                </div>

                                <div className="Name-user">
                                    <b>SIBGHA KHAN</b>
                                    <span>sibghaarshad124@gmail.com</span>
                                </div>
                            </div>

                            <div className="reviews">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star-half' ></i>

                            </div>
                        </div>

                        <div className="client-comment">
                            <p>Best product to ever dolor, sit amet consectetur adipisicing elit. Nemo, nesciunt Lorem ipsum dolor sit amet.</p>
                        </div>


                    </div>



                    <div className="testimonial-box">

                        <div className="box-top">

                            <div className="profile">

                                <div className="profile-img">
                                    <img src="images/image6.png" />
                                </div>

                                <div className="Name-user">
                                    <b>HARAM AZIZ</b>
                                    <span>haramaziz00@gmail.com</span>
                                </div>
                            </div>

                            <div className="reviews">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star-half' ></i>

                            </div>
                        </div>

                        <div className="client-comment">
                            <p>Best product to ever dolor, sit amet consectetur adipisicing elit. Nemo, nesciunt Lorem ipsum dolor sit amet.</p>
                        </div>


                    </div>


                </div>
            </section>
        </>
    )
}

export default ProductDetail
