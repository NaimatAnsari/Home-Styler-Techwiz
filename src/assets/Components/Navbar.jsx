import React,{useRef} from 'react'
import { NavLink } from 'react-router-dom'




const Navbar = () => {
  const offcanvasRef = useRef(null);

  const closeOffcanvas = () => {
    const offcanvas = offcanvasRef.current;
    if (offcanvas) {
      offcanvas.classList.remove('show');
      document.body.classList.remove('offcanvas-backdrop');
    }
  };


  return (
<>
  {/* Navbar Start  */}
    <nav className="navbar navbar-expand-md bg-light navbar-light nav-shadow sticky-top">
      <div className="container">
        <NavLink className="navbar-brand ms-3" to="/">
          <img src="../../../public/assets/image/logo.png" alt="BrandLOGO" className='BrandLogo'/>
        </NavLink>
        <button className="navbar-toggler me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#cnvs"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-4">
          <ul className="navbar-nav nav-ul mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link nav-a" to="/about" >About US</NavLink>
            </li>
            {/* Products Dropdown Start  */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"
                aria-expanded="false" data-dismiss="canvas">
              Products
              </NavLink>
              <div className="dropdown-menu mega-menu dropdown-menu-lg-end">
                <div className="col-lg-4">
                  <ul>
                    <li><NavLink className="dropdown-item " to="/Furniture">Furniture</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Furniture">Sofas and Couches</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Furniture">Chairs and Recliners</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Furniture">Tables</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Furniture">Beds and Mattresses</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Furniture">Cabinets, Shelves, or Dressers</NavLink></li>
                    
                  </ul>
                  <ul>
                    <li><NavLink className="dropdown-item" to="/Lighting">Lighting</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Lighting">Ceiling Lights</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item" to="/Lighting">Wall Lights</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Lighting">Floor Lamps</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item" to="/Lighting">Table Lamps</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Lighting">Outdoor Lighting</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li><NavLink className="dropdown-item" to="/Decor">Decor</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Decor">Rugs and Carpets</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Decor">Curtains and Blinds</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Decor">Wall Art and Mirrors</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Decor">Cushions and Throws</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Decor">Vases and Plant Pots</NavLink></li>
                  </ul>
                  <ul>
                    <li><NavLink className="dropdown-item " to="/Kitchen">Kitchen</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Kitchen">Cabinets and Pantries</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Kitchen">Countertops</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item" to="/Kitchen">Sinks and Faucets</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item" to="/Kitchen">Kitchen Islands and Carts</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item" to="/Kitchen"> Backsplashes</NavLink></li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li><NavLink className="dropdown-item" to="/Bathroom">Bathroom</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Bathroom">Vanities and Cabinets
                    </NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Bathroom">Showers and Bathtubs</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Bathroom">Toilets and Bidets</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Bathroom">Bathroom Sinks</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Bathroom">Mirrors and Medicine Cabinets</NavLink></li>
                  </ul>
                
                </div>
              </div>
            </li>
            {/* Products Dropdown End  */}
            <li className="nav-item">
              <NavLink className="nav-link nav-a" to="/Gallary">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-a" to="/feedback">Feedback</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-a" to="/contact">Contact US</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-a" to="/SiteMap">SiteMap</NavLink>
            </li>
          </ul>
        </div>
        </div>
    </nav>
    {/* Mobile Navbar Start */}
    <nav>
      <div className="offcanvas offcanvas-start canvas-none" id="cnvs" ref={offcanvasRef}>
        <div className="offcanvas-header border-bottom">
          <NavLink className="navbar-brand offcanvas-brand" to="#">
            <img src="../../../public/assets/image/logo.png" alt="BrandLOGO" className="BrandLogo" />
          </NavLink>
          <button className="btn btn-close btn-outline-light" data-bs-dismiss="offcanvas">
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active nav-a" aria-current="page" to="/" onClick={closeOffcanvas}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-a" to="/About" onClick={closeOffcanvas}>About US</NavLink>
            </li>
            {/* Dropdown and other links */}
            <li className="nav-item">
              <NavLink className="nav-link nav-a" to="/Gallary" onClick={closeOffcanvas}>Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-a" to="/Feedback" onClick={closeOffcanvas}>FeedBack</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-a" to="/Contact" onClick={closeOffcanvas}>Contact US</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-a" to="/SiteMap" onClick={closeOffcanvas}>SiteMap</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  

     {/* Navbar End  */}
</>
  )
}

export default Navbar