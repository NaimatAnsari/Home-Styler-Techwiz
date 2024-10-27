import React from 'react'
// import Image from "../../public/img/beds (1).jpeg"
import GallaryData from "../assets/Components/data.json"
import Card from '../assets/Components/Card';
function Gallary() {

    return (
        <div>
            <div className="container-fluid py-5 justify-content-center gap-3 d-flex flex-wrap">
            
           {
             GallaryData.slice(1,103).map((GallaryItems) => (
                <img src={GallaryItems.image} alt="" />
                ))
           }
            </div>
        </div>

    )
}

export default Gallary