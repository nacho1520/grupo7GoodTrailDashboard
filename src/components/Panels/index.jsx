import React, { useState, useEffect } from 'react';
import "./Panels.css";


function Panels () {
    const [totalUsers, setTotalUsers] = useState([])
    const [totalProducts, setTotalProducts] = useState([])
    useEffect(() =>{
        fetch("/api/users")
        .then(res => res.json())
        .then(data => {
            setTotalUsers(data.count)
        })
        fetch("/api/products?page=1")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTotalProducts(data)
        })
    }, [])
    return (
        <div className='panels-container'>
            <h3>Total de productos {totalProducts.count}</h3>
            <h3>Total de usuarios {totalUsers}</h3>
            <h3>Total de categorias {totalProducts.categories ? totalProducts.categories.length : ""} </h3>
        </div>
    )
}

export default  Panels