import {BrowserRouter  as Router, Route, Routes , Link , NavLink}  from "react-router-dom";
import Menu from './Menu';
export default function Header(){
    return(
        <div className="wrap header">
            <NavLink to="/"><h1>Ina</h1></NavLink>
            <Menu/>
        </div>
    )
}