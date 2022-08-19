import React, { useState, useEffect } from 'react';
import './TotalProductsByCategory.css';

const TotalProductsByCategory = () => {

  useEffect(() => {
    fetch('/api/products?page=1')
    .then(res => res.json())
    .then(data => {
  
    });
  },[])

  // const [ totalByCategory, setTotalByCategory ] = useState();
  // const getTotalProductsByCategory = () => {

  // };

  return (
    <div>
      Hola
    </div>
  );
};

export default TotalProductsByCategory;