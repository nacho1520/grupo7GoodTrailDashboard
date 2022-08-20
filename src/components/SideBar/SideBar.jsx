import React from "react";
import "./sideBar.css";
import logo from "../../assets/images/logo.png";

const SideBar = () => {
    return(
        <ul className="sideBar">
            <li>
                <img src={logo} alt="" className="logo"/>
            </li>
            <hr className="delim" />
            <li>
                <span>Goodtrail - Dashboard</span>
            </li>
        </ul>
    );
}

export default SideBar;