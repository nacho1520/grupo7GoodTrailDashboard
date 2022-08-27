import React, { useState, useEffect } from "react";
import useFetch from '../hooks/useFetch';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import './LastExperience.css';

function LastExperience() {
    const { data, isLoading } = useFetch('/api/products/last');

    const showBody = () => {
        return(
            <div className="card-body">
                <p className="subTitle">{data.experience.name}</p>
                <p>{data.experience.description}</p>
            </div>
        ); 
    }

    return (
        <div className="last-experience-container">
                <div className="card-header py-3">
                    <h5>Ultima Experiencia</h5>
                </div>
                {isLoading ? <LoaderSpinner /> :
                    data && data.experience && showBody()
                }
        </div>
    )
}
export default LastExperience;