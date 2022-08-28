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
                    <span><i class="fa-solid fa-chart-line icon-total-panel"></i>Dashboard</span>
                </Link>
            </li>
            <hr className="delim" />
            <li>
                <Link to='/experiences' className="link">
                    <span><i className="fa-solid fa-star icon-total-panel"></i>Experiencias</span>
                </Link>
            </li>
            <hr className="delim" />
            <li>
                <Link to='/users' className="link">
                    <span><i className="fa-solid fa-users icon-total-panel"></i>Usuarios</span>
                </Link>
            </li>
        </ul>
    );
}

export default SideBar;