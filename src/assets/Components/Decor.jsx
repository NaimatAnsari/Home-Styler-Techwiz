import React, { useState } from 'react';
import Card from './Card';
import DecorData from './data.json';
function Decor() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Define the categories based on your data
  const categories = [
    { label: "Rugs", value: "Rugs" },
    { label: "Carpets", value: "Carpets" },
    { label: "Curtains", value: "Curtains" },
    { label: "Blinds", value: "Blinds" },
    { label: "Wall Art", value: "Wall Art" },
    { label: "Cushions", value: "Cushions" },
    { label: "Vases", value: "Vases" },
    { label: "Plant Pots", value: "Plant Pots" },
    { label: "Throws", value: "Throws" },
    { label: "Mirrors", value: "Mirrors" }
  ];

  // Filter and sort decor data based on the state
  const filteredData = DecorData
    .filter(item => item.type === 'Decor') // Filter for items with type "Decor"
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
          <div className="col-12 shadow border-5 p-2 pt-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className='fs-6' href="#">Home</a></li>
                <li className="breadcrumb-item"><a className='fs-6' href="#">Products</a></li>
                <li className="breadcrumb-item active" aria-current="page">Decor</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-3 d-flex gap-3 py-3" style={{height:"20%"}}>
            <h3 className='ps-md-3'>Sorting</h3>
            <select onChange={(e) => setSortOrder(e.target.value)}>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
          <div className="col-md-4 col-lg-5 d-lg-flex gap-3 py-3">
            <h3>Categories</h3>
            <select onChange={(e) => setSelectedCategory(e.target.value)} className='w-50 py-1'>
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 col-sm-12 py-3">
            <input 
              className='w-75 p-1' 
              type="text" 
              placeholder='Search by title' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>
      </div>
      <div className="container-fluid justify-content-center gap-3 d-flex flex-wrap">
        {filteredData.map((decorItem) => (
          <Card
            key={decorItem.id}
            id={decorItem.id}
            title={decorItem.title}
            brand={decorItem.brand}
            desc={decorItem.description}
            price={decorItem.price}
            image={decorItem.image}
          />
        ))}
      </div>
    </>
  );
}

export default Decor;
