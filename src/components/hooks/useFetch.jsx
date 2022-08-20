import React from "react";
import { useState } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data);
        });
    
    return data;
}

export default useFetch;