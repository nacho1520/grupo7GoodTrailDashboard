import React, { useState, useEffect } from 'react';
import "./Panels.css";


function Panels () {
    const [totalUsers, setTotalUsers] = useState([])
    const [totalProducts, setTotalProducts] = useState([])
    useEffect(() =>{
        fetch("/api/users?page=0")
        .then(res => res.json())
        .then(data => {
            setTotalUsers(data.count)
        })
        fetch("/api/products?page=1")
        .then(res => res.json())
        .then(data => {
            setTotalProducts(data)
        })
    }, [])
    return (
        <div className='panels-container'>
            <h3 className='total-panel'><p>Total de experiencias {totalProducts.count}</p><i className="fa-solid fa-star icon-total-panel"></i></h3>
            <h3 className='total-panel'><p>Total de usuarios {totalUsers}</p><i className="fa-solid fa-users icon-total-panel"></i></h3>
            <h3 className='total-panel'><p>Total de categorías {totalProducts.categories ? totalProducts.categories.length : ""}</p><i className="fa-solid fa-list icon-total-panel"></i></h3>
        </div>
    )
}

export default  Panels