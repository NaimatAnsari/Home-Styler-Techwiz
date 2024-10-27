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
                        <img className="h-100 w-100 rounded-5" src={findData.image} alt="Product" />
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
                                    <img src="https://avatars.githubusercontent.com/u/123116024?v=4" />
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
                                    <img src="data:image/jpeg;base64,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" />
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
                                    <img src="https://avatars.githubusercontent.com/u/179528042?v=4" />
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
                                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQGITit9f1_AUw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690397284062?e=1735776000&v=beta&t=A-niugnk6kSU50FdS-L9oGMlggcdD_ezJM3QNXfAXm0" />
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
                                    <img src="data:image/jpeg;base64,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" />
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
                                    <img src="data:image/jpeg;base64,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" />
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
