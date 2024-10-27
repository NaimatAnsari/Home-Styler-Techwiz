import React from 'react'
// import Image from "../../public/img/beds (1).jpeg"
import GallaryData from "../assets/Components/data.json"
import Card from '../assets/Components/Card';
function Gallary() {

    return (
        <div>
            <section className='about-banner'>
        <div className="container text-center text-white">
          <h1 className="main-h1">Gallery</h1>
          <h4>Elegant decor, stylish spaces, curated for you</h4>
        </div>
      </section>
            <div className="container py-5 justify-content-center gap-3 d-flex flex-wrap image-hover">
            
           {
             GallaryData.slice(1,20).map((GallaryItems) => (
                <img src={GallaryItems.image} className='' />
                ))
           }
            </div>
        </div>

    )
}

export default Gallary