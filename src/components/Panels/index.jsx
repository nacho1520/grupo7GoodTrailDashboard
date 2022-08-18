import React from "react";

function Panels (){
    React.useEffect(() =>{
        fetch("/api/users")
        .then(res => res.json())
        .then(data => {
           
        })
    }, [])
    return (
        <div>
            <h3>Total de productos</h3>
            <h3>Total de usuarios </h3>
            <h3>Total de categorias</h3>
        </div>
    )
}

export default  Panels