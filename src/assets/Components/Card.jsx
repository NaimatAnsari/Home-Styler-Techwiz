import React from 'react'
import { Link } from 'react-router-dom'

function Card({ brand, desc, price, image, title, id }) {
  return (
    <>
      <div className="card h-100" style={{ width: '18rem' }}>
        <div className="position-relative">
          <img
            src={image} className="card-img-top" alt="Product Image" />
          <i className="bi bi-bookmark bookmark-icon"></i>
        </div>
        <div className="card-body bg-light">
          <h6 className="text-muted">{brand}</h6>
          <h5 className="card-title">{title}</h5>
          <div className="d-flex align-items-center mb-2">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
            <span className="ms-2 rating-count">(9211)</span>
          </div>
          <p className="card-text">{desc}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="price">{price}</span>
            <Link to={`/detail/${id}`}>
              <button className="btn-light btn-outline-dark rounded-2 p-1" style={{fontSize: "20px"}}>
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card