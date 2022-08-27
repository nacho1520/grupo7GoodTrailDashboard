import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import useFetch from "../hooks/useFetch";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import ReactPaginate from "react-paginate";

const UsersTable = () => {
    const [page, setPage] = useState(0);
    const { data, isLoading, fetchData } = useFetch(`/api/users?page=${page}`);
    const header = ['ID', 'Nombre', 'Apellido', 'Email'];

    useEffect(() => {
        fetchData();
    }, [page])

    const changePage = ({ selected }) => {
        setPage(selected);
    } 

    const showTable = () => {
        return(
            <div className="table-container">
                { data && data.users.length > 0 && <Table header={header} data={data.users} isForExp={false}/> }
                <ReactPaginate 
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    pageCount={data && data.pages}
                    onPageChange={changePage}
                    containerClassName={'pagination-container'}
                    previousLinkClassName={'previos-btn'}
                    nextLinkClassName={'next-btn'}
                    disabledClassName={'disabled-btn'}
                    activeClassName={'active-btn'}
                />
            </div>
        );
    }

    return(
        <div className="container">
            { isLoading ? <LoaderSpinner /> : showTable()}
        </div>
    );
}

export default UsersTable;