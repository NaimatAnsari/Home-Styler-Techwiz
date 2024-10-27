import React, { useState } from 'react';
import LightData from './data.json';
import Card from './Card';

function Lighting() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Define the categories based on your data
  const categories = [
    { label: "Celing Lights", value: "Celing Lights" },
    { label: "Wall Lights", value: "Wall Lights" },
    { label: "Floor Lamps", value: "Floor Lamps" },
    { label: "Table Lamps", value: "Table Lamps" },
    { label: "Outdoor Lighting", value: "Outdoor Lighting" }
  ];

  // Filter and sort lighting data based on the state
  const filteredData = LightData
    .filter(item => item.type === 'Lightning') // Filter for items with type "Lightning"
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || item.title.includes(selectedCategory))
    )
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', '').replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace('$', '').replace(/[^0-9.-]+/g, ""));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

  return (
    <>
      <div className="container my-5 bg-light">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active"><a className='fs-6' href="">Home</a></li>
                <li className="breadcrumb-item active"><a className='fs-6' href="">Products</a></li>
                <li className="breadcrumb-item active" aria-current="page">Lighting</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-3 d-flex gap-3" style={{height:"20%"}}>
            <h3 className='ps-md-3'>Sorting</h3>
            <select onChange={(e) => setSortOrder(e.target.value)}>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
          <div className="col-md-4 col-lg-5 d-lg-flex gap-3 mb-3">
            <h3>Categories</h3>
            <select onChange={(e) => setSelectedCategory(e.target.value)} className='w-75 py-1'>
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 col-sm-12 mb-3">
            <input 
              className='w-100 p-1' 
              type="text" 
              placeholder='Search' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>
      </div>
      <div className="container-fluid justify-content-center gap-3 d-flex flex-wrap">
        {filteredData.map((LightItems) => (
          <Card
            key={LightItems.id}
            id={LightItems.id}
            title={LightItems.title}
            brand={LightItems.brand}
            desc={LightItems.description}
            price={LightItems.price}
            image={LightItems.image}
          />
        ))}
      </div>
    </>
  );
}

export default Lighting;
