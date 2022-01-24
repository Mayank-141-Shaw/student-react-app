import React from 'react'
import "./style/Navbar.css"
import {NavLink} from 'react-router-dom'

import { AppBar, IconButton, makeStyles } from "@material-ui/core"

export default function Navbar() {

    return (
        <nav>
            <ul >
                <li><NavLink className={"NavLink"} to={"/"}>HOME</NavLink></li>
                <li><NavLink className={"NavLink"} to={"/show"}>SHOW All</NavLink></li>
                <li><NavLink className={"NavLink"} to={"/add"}>ADD</NavLink></li>
                <li><NavLink className={"NavLink"} to={"/search"}>SEARCH</NavLink></li>
            </ul>
        </nav>        
    )
}
