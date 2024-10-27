import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './assets/Components/Navbar'
import Footer from './assets/Components/Footer'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Gallary from './Pages/Gallary'
import Furniture from './assets/Components/Furniture'
import Lighting from './assets/Components/Lighting'
import Decor from './assets/Components/Decor'
import Kitchen from './assets/Components/Kitchen'
import Bathroom from './assets/Components/Bathroom'
import FeedBack from './assets/Components/FeedBack'
import ProductDetail from './assets/Components/ProductDetail'
import SideMap from './assets/Components/SideMap'



const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/decor" element={<Decor />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/sidemap" element={<SideMap/>} />
          <Route path="detail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App