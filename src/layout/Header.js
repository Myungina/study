import {BrowserRouter  as Router, Route, Routes , Link , NavLink}  from "react-router-dom";
import { Box , Flex } from "@chakra-ui/react";
import styled from 'styled-components';

export default function Header(){
    return(
        <Box>
            <Flex layerStyle="nav" justify="space-around" gap="5">
                <NavLink to="/"  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>profile</NavLink>
                <NavLink to="/Portfolio" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>portfolio</NavLink>
            </Flex>
        </Box>
    )
}