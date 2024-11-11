import React from 'react'
import img from "../islamic.jpg";
export const ProductItem = () => {
  return (  
      <div>
        <img className="Imgs" src={img}></img>
        <h3>Islamic</h3>
        <p>18 KD</p>
      </div>

  );
};
