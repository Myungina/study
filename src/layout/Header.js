import {BrowserRouter  as Router, Route, Routes , Link , NavLink}  from "react-router-dom";
import styled from 'styled-components';

const HeaderWrap = styled.div`
    background:#ffecd7;
`
const HeaderList = styled.ul`
    display:table;
    width:auto;
    min-width:360px;
    margin:0 auto;
`
const HeaderItem = styled.li`
    display:table-cell;
    padding:0 10px;
    cursor:pointer;
    font-size:15px;
    a{
        display:inline-block;
        width:100%;
        padding:10px 0;
        text-align:center;
        &.active{
            font-weight:600
        }
        &:after{
            position:absolute;
            display: block;
            left:0;
            bottom:0;
            width:0%;
            height:3px;
            content:'';
            background:#fdc6d3;
        }
        &:hover:after{
            width:100%;
            transition: all 0.3s;
        }
    }
`

export default function Header(){
    return(
        <div className="wrap header">
            <HeaderWrap>
                <HeaderList>
                    <HeaderItem><NavLink to="/"  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>profile</NavLink></HeaderItem>
                    <HeaderItem><NavLink to="/Portfolio" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>portfolio</NavLink></HeaderItem>
                </HeaderList>
            </HeaderWrap>
        </div>
    )
}