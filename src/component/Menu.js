import {BrowserRouter  as Router, Route, Routes , Link , NavLink}  from "react-router-dom";
import Navstyle from '../css/Menu.css';
export default function Menu(){
    return(
        <div>
            <ul className="nav">
                <li><NavLink to="/Profile">profile</NavLink></li>
                <li><NavLink to="/Portfolio">portfolio</NavLink></li>
                <li><NavLink to="/Etc">etc</NavLink></li>
            </ul>
        </div>
    )
}