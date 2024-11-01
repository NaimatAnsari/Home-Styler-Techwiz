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
          <img src="/assets/image/logo.png" alt="BrandLOGO" className='BrandLogo'/>
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
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none " to="/Furniture">Furniture</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture">Sofas and Couches</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture">Chairs and Recliners</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture">Tables</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture">Beds and Mattresses</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture">Cabinets, Shelves, or Dressers</NavLink></li>
                    
                  </ul>
                  <ul>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting">Lighting</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting">Ceiling Lights</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting">Wall Lights</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting">Floor Lamps</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting">Table Lamps</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting">Outdoor Lighting</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor">Decor</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor">Rugs and Carpets</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor">Curtains and Blinds</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor">Wall Art and Mirrors</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor">Cushions and Throws</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor">Vases and Plant Pots</NavLink></li>
                  </ul>
                  <ul>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none " to="/Kitchen">Kitchen</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen">Cabinets and Pantries</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen">Countertops</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen">Sinks and Faucets</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen">Kitchen Islands and Carts</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen"> Backsplashes</NavLink></li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom">Bathroom</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom">Vanities and Cabinets
                    </NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom">Showers and Bathtubs</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom">Toilets and Bidets</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom">Bathroom Sinks</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom">Mirrors and Medicine Cabinets</NavLink></li>
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
        <div className="offcanvas-header pt-2 border-bottom shadow">
          <NavLink className="navbar-brand offcanvas-brand" to="#">
            <img src="/assets/image/logo.png" alt="BrandLOGO" className="BrandLogo" />
          </NavLink>
          <button className="btn btn-close btn-outline-white shadow-none" data-bs-dismiss="offcanvas">
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
             {/* Products Dropdown Start  */}
             <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"
                aria-expanded="false" data-dismiss="canvas">
              Products
              </NavLink>
              <div className="dropdown-menu mega-menu dropdown-menu-lg-end">
                <div className="col-lg-4">
                  <ul>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none " to="/Furniture" onClick={closeOffcanvas}>Furniture</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture" onClick={closeOffcanvas}>Sofas and Couches</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture" onClick={closeOffcanvas}>Chairs and Recliners</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture" onClick={closeOffcanvas}>Tables</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture" onClick={closeOffcanvas}>Beds and Mattresses</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Furniture" onClick={closeOffcanvas}>Cabinets, Shelves, or Dressers</NavLink></li>
                    
                  </ul>
                  <ul>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting" onClick={closeOffcanvas}>Lighting</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting" onClick={closeOffcanvas}>Ceiling Lights</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting" onClick={closeOffcanvas}>Wall Lights</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting" onClick={closeOffcanvas}>Floor Lamps</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting" onClick={closeOffcanvas}>Table Lamps</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Lighting" onClick={closeOffcanvas}>Outdoor Lighting</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor" onClick={closeOffcanvas}>Decor</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor" onClick={closeOffcanvas}>Rugs and Carpets</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor" onClick={closeOffcanvas}>Curtains and Blinds</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor" onClick={closeOffcanvas}>Wall Art and Mirrors</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor" onClick={closeOffcanvas}>Cushions and Throws</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Decor" onClick={closeOffcanvas}>Vases and Plant Pots</NavLink></li>
                  </ul>
                  <ul>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none " to="/Kitchen" onClick={closeOffcanvas}>Kitchen</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen" onClick={closeOffcanvas}>Cabinets and Pantries</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen" onClick={closeOffcanvas}>Countertops</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen" onClick={closeOffcanvas}>Sinks and Faucets</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen" onClick={closeOffcanvas}>Kitchen Islands and Carts</NavLink>
                    </li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Kitchen" onClick={closeOffcanvas}> Backsplashes</NavLink></li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom" onClick={closeOffcanvas}>Bathroom</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom" onClick={closeOffcanvas}>Vanities and Cabinets
                    </NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom" onClick={closeOffcanvas}>Showers and Bathtubs</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom" onClick={closeOffcanvas}>Toilets and Bidets</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom" onClick={closeOffcanvas}>Bathroom Sinks</NavLink></li>
                    <li><NavLink className="dropdown-item btn hover-secondary shadow-none" to="/Bathroom" onClick={closeOffcanvas}>Mirrors and Medicine Cabinets</NavLink></li>
                  </ul>
                
                </div>
              </div>
            </li>
            {/* Products Dropdown End  */}
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