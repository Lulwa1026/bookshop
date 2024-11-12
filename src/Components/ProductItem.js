import React from 'react'
export const ProductItem = (props) => {
    
  return (  
      <div>
        <img className="Imgs" src={props.product.img}></img>
        <h3>{props.product.name}</h3>
        <p>{props.product.price}</p>
      </div>

  );
};
