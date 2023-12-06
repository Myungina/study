import {BrowserRouter  as Router, Route, Routes , Link , NavLink}  from "react-router-dom";
import Navstyle from '../css/Menu.css';
export default function Menu(){
    return(
        <div className="inner">
            <ul className="nav">
                <li><NavLink to="/"  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>profile</NavLink></li>
                <li><NavLink to="/Portfolio" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>portfolio</NavLink></li>
                <li><NavLink to="/Etc" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> etc</NavLink></li>
            </ul>
        </div>
    )
}