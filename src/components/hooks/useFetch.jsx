import React from "react";

const success = {
    data: null,
    isLoading: false
}

const loadingState = {
    data: null,
    isLoading: true
}

const initialState = {
    data: null,
    isLoading: false
}

const useFetch = (url) => {
    const [state, setState] = React.useState(initialState);

    const fetchData = () => {
        setState(loadingState);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setState({ ...success, data: data });
            })
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    return { ...state, fetchData }
}

export default useFetch;