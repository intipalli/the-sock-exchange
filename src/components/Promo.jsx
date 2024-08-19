import React, { useEffect, useState } from 'react';
import promoData from '../assets/promo.json';

const Promo = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    // Load the JSON data when the component mounts
    setPromos(promoData);
  }, []);

  return (
    <div className="card-container d-flex flex-row justify-content-start" style={{ gap: "20px", padding: "20px" }}>
      {promos.map(promo => (
        <div key={promo.id} className="card bg-light" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{promo.feature}</h5>
            <p className="card-text">{promo.benefit}</p>
            <p className="card-text"><small className="text-muted">Target Audience: {promo.target_audience}</small></p>
            <a href="#" className="btn btn-primary">Click to buy!</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Promo;
