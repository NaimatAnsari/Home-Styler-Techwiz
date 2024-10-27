import React, { useState } from 'react';
import Card from './Card';
import kitchenData from './data.json';

function Kitchen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Define the categories based on your data
  const categories = [
    { label: "Cabinets", value: "Cabinets" },
    { label: "Faucets", value: "Faucets" },
    { label: "Backsplashes", value: "Backsplashes" },
    { label: "Pantries", value: "Pantries" },
    { label: "Countertops", value: "Countertops" },
    { label: "Sinks", value: "Sinks" },
    { label: "Kitchen Islands and Carts", value: "Kitchen Islands and Carts" }
  ];

  // Filter and sort kitchen data based on the state
  const filteredData = kitchenData
    .filter(item => item.type === "kitchen") // Filter for items with type "kitchen"
    .filter(item => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || item.title === selectedCategory)
      );
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      } else {
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      }
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
                <li className="breadcrumb-item active" aria-current="page">Kitchen</li>
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
        {filteredData.map((kitchenItems) => (
          <Card
            key={kitchenItems.id}
            id={kitchenItems.id}
            title={kitchenItems.title}
            brand={kitchenItems.brand}
            desc={kitchenItems.description}
            price={kitchenItems.price}
            image={kitchenItems.image}
          />
        ))}
      </div>
    </>
  );
}

export default Kitchen;
