import React, { useState, useEffect } from 'react';
import './TotalProductsByCategory.css';

const TotalProductsByCategory = () => {

  const [ categoriesCount, setCategoriesCount ] = useState([]);

  useEffect(() => {
    fetch('/api/products?page=1')
    .then(res => res.json())
    .then(data => {
      setCategoriesCount(data.categories);
    })
    .catch(error => console.error(error));
  },[]);

  return (
    <section className='categories-count-container'>
      <ul className='categories-list'>
        {
          categoriesCount.map((categoryToRender, i) => {
            return(
              <li 
                className='category-card'
                key = { i }
                >
                <p>{ categoryToRender.category }: { categoryToRender.totalExperiences }</p>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};

export default TotalProductsByCategory;