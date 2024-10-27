import React from 'react'
import { NavLink } from 'react-router-dom'

const SideMap = () => {
  return (
   <>
    <div className="container sitemap-container">
  
        <div className="sitemap-title">
            Navigate with ease - explore our comprehensive site map to find exactly what you need!
        </div>

        <div className="row mt-4">
            <div className="col-md-4 category-box">
                <NavLink to="/" className="text-dark text-decoration-none">
                    Home
                </NavLink>
            </div>
            <div className="col-md-4 category-box">
                <NavLink to="/furniture" className="text-dark text-decoration-none">
                    Products
                </NavLink>
                <div className="sub-category-box">
                    <NavLink to="/furniture" className="text-white text-decoration-none">
                        Furniture
                    </NavLink>
                    <div className="item-box">
                        <NavLink to="/furniture" className="text-dark text-decoration-none">Sofas & Couches</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/furniture" className="text-dark text-decoration-none">Chairs & Recliners</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/furniture" className="text-dark text-decoration-none">Tables</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/furniture" className="text-dark text-decoration-none">Beds & Mattresses</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/furniture" className="text-dark text-decoration-none">Storage</NavLink>
                    </div>
                </div>
                <div className="sub-category-box">
                    <NavLink to="/kitchen" className="text-white text-decoration-none">
                        Kitchen
                    </NavLink>
                    <div className="item-box">
                        <NavLink to="/Kitchen" className="text-dark text-decoration-none">Cabinets & Pantries</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/Kitchen" className="text-dark text-decoration-none">Countertops</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/Kitchen" className="text-dark text-decoration-none">Sinks & Faucets</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/Kitchen" className="text-dark text-decoration-none">Kitchen Carts</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/Kitchen" className="text-dark text-decoration-none">Backsplashes</NavLink>
                    </div>
                </div>
                <div className="sub-category-box">
                    <NavLink to="/lighting" className="text-white text-decoration-none">
                        Lighting
                    </NavLink>
                    <div className="item-box">
                        <NavLink to="/lighting" className="text-dark text-decoration-none">Ceiling Lights</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/lighting" className="text-dark text-decoration-none">Wall Lights</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/lighting" className="text-dark text-decoration-none">Floor Lamps</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/lighting" className="text-dark text-decoration-none">Table Lamps</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/lighting" className="text-dark text-decoration-none">Outdoor Lights</NavLink>
                    </div>
                </div>
                <div className="sub-category-box">
                    <NavLink to="/decor" className="text-white text-decoration-none">
                        Decor
                    </NavLink>
                    <div className="item-box">
                        <NavLink to="/decor" className="text-dark text-decoration-none">Rugs & Carpets</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/decor" className="text-dark text-decoration-none">Curtains & Blinds</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/decor" className="text-dark text-decoration-none">Wall Art & Mirrors</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/decor" className="text-dark text-decoration-none">Cushions & Throws</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/decor" className="text-dark text-decoration-none">Vases & Plant Pots</NavLink>
                    </div>
                </div>
                <div className="sub-category-box">
                    <NavLink to="/bathroom" className="text-white text-decoration-none">
                        Bathroom
                    </NavLink>
                    <div className="item-box">
                        <NavLink to="/bathroom" className="text-dark text-decoration-none">Vanities & Cabinets</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/bathroom" className="text-dark text-decoration-none">Showers & Bathtubs</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/bathroom" className="text-dark text-decoration-none">Toilets & Bidets</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/bathroom" className="text-dark text-decoration-none">Bathroom Sinks</NavLink>
                    </div>
                    <div className="item-box">
                        <NavLink to="/bathroom" className="text-dark text-decoration-none">Mirrors & Medicine Cabinets</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-md-4 category-box">
                <NavLink to="/about" className="text-dark text-decoration-none">
                    About Us
                </NavLink>
            </div>
            <div className="col-md-4 category-box">
                <NavLink to="/gallary" className="text-dark text-decoration-none">
                    Gallery
                </NavLink>
            </div>
            <div className="col-md-4 category-box">
                <NavLink to="/feedback" className="text-dark text-decoration-none">
                    Feedback
                </NavLink>
            </div>
            <div className="col-md-4 category-box">
                <NavLink to="/contact" className="text-dark text-decoration-none">
                    Contact Us
                </NavLink>
            </div>
        </div>
    </div>
   </>
  )
}

export default SideMap