import React from 'react';
import HeroSection from '../assets/Components/HeroSection';
import Popular from '../assets/Components/Popular';
import Card from '../assets/Components/Card';
import data from '../assets/Components/data.json'; 
import Banner from '../assets/Components/Banner';
import Choose from '../assets/Components/Choose';

// import Gallary from './Gallary';

const Home = () => {
  // Ensure data is an array and contains items
  const newArrivals = data.filter(item => item.newArrival === 'new');



  return (
    <>
      <HeroSection />
      <Popular />
      <Banner />

      <div className="container-fluid">
        <h3 className='fs-1 text-center mb-5'><b>New Arrivals</b></h3>
        <div className="container-fluid justify-content-center gap-3 d-flex flex-wrap">
          {newArrivals.map((item) => (
            <Card 
              key={item.id}
              id={item.id} 
              title={item.title} 
              brand={item.brand} 
              desc={item.description} 
              price={item.price} 
              image={item.image} 
            />
          ))}
        </div>    
      </div>
      <Choose />
    </>
  );
};

export default Home;