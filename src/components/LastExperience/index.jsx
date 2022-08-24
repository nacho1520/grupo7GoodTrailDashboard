import React, { useState, useEffect } from "react";
import './LastExperience.css';

function LastExperienceTable () {
    const [lastProduct, setLastProduct] = useState([])
    
    useEffect(() =>{
            fetch("/api/products?page=1")
            .then(res => res.json())
            .then(data => {
                const page = Math.round(data.count/10) + 1
                return page
            })
            .then(data => {
                fetch(`/api/products?page=${data}`)
                .then(res => res.json())
                .then(data => {
                    let experiencia = data.experiences[data.experiences.length -1]
                    setLastProduct(experiencia)
                })
            })
            
        }, [])

        return (
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5>Ultimo producto en la Base de Datos</h5>
                </div>
                <div className="card-body">
                    <p className="subTitle">{lastProduct.name}</p>
                    <p>{lastProduct.description}</p>
                </div>
            </div>
        </div>  
        )
    }
    export default LastExperienceTable;