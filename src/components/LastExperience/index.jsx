import React, { useState, useEffect } from "react";
import './LastExperience.css';
import useFetch from "../hooks/useFetch";

function LastExperienceTable () {
    const [lastProduct, setLastProduct] = useState([null])
    const [lastProductCategory, setLastProductCategory] = useState([null])
    
    useEffect(() =>{
            fetch("/api/products?page=1")
            .then(res => res.json())
            .then(data => {
                setLastProduct(data.experiences[data.experiences.length -1])
                console.log(data)
                setLastProductCategory(data.categories)
            })
        }, [])
        return (
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5>Ultimo producto en la Base de Datos</h5>
                </div>
                <div className="card-body">
                    {/* <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div> */}
                    <p className="subTitle">{lastProduct.name}</p>
                    <p>{lastProduct.description}</p>
                </div>
            </div>
        </div>  
        )
    }
    
    
    // const LastExperienceTable = () => {
        // const { data, isLoading } = useFetch("/api/products?page=1", 'experiences'); 
    
        // return(
        //     <div className="table-container">
        //         <table className="table">
        //             <thead>
        //                 <tr>
        //                     <th>Nombre</th>
        //                     <th>Descripción</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {data && data.length > 0  && data.map((exp, index) => {
        //                     let numero = data.length 
        //                     if(exp.id == numero){
        //                         return(
        //                             <tr key={index}>
        //                                 <td>{exp.name}</td>
        //                                 <td>{exp.description}</td>
        //                             </tr>
        //                         );
        //                     } 
        //                 }) 
        //                 }
        //             </tbody>
        //         </table>
        //         {isLoading && <div>Loading...</div>}
        //     </div>
        // );
    // }
    export default LastExperienceTable;