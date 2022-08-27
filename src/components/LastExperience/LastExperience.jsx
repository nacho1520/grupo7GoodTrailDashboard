import React, { useState, useEffect } from "react";
import './LastExperience.css';

function LastExperience() {
    const [lastProduct, setLastProduct] = useState([])

    useEffect(() => {
        fetch("/api/products?page=1")
            .then(res => res.json())
            .then(data => {
                const lastExperienceId = data.count
                return lastExperienceId
            })
            .then(lastExperienceId => {
                fetch(`/api/products/${lastExperienceId}`)
                    .then(res => res.json())
                    .then(data => {
                        let experience = data.data.experience
                        setLastProduct(experience)
                    })
            })

    }, [])

    return (
        <div className="last-experience-container">
                <div className="card-header py-3">
                    <h5>Ultima Experiencia</h5>
                </div>
                <div className="card-body">
                    <p className="subTitle">{lastProduct.name}</p>
                    <p>{lastProduct.description}</p>
                </div>
        </div>
    )
}
export default LastExperience;