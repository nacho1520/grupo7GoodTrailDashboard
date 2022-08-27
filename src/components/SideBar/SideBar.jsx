import React from "react";
import "./sideBar.css";
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

const SideBar = () => {
    return(
        <ul className="sideBar">
            <li>
                <img src={logo} alt="" className="logo"/>
            </li>
            <hr className="delim" />
            <li>
                <Link to='/' className="link">
                    <span>Goodtrail - Dashboard</span>
                </Link>
            </li>
            <hr className="delim" />
            <li>
                <Link to='/experiences' className="link">
                    <span>Experiencias</span>
                </Link>
            </li>
            <hr className="delim" />
            <li>
                <Link to='/experiences' className="link">
                    <span>Usuarios</span>
                </Link>
            </li>
        </ul>
    );
}

export default SideBar;