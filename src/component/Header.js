import {BrowserRouter  as Router, Route, Routes , Link , NavLink}  from "react-router-dom";
import Menu from './Menu';
import headerImg from '../img/cover_img.jpg';
import '../css/Menu.css';
export default function Header(){
    return(
        <div className="wrap header">
             <img src={headerImg} alt="BigCo Inc. logo"/>
            <Menu/>
        </div>
    )
}