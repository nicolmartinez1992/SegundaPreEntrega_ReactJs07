import React from "react"
import "./index.css"
import CartWidget from "../cart-widget"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="container">
            <ul className="list">
                <div className="menuContainer">
                    <li className="brand">
                        <NavLink className="title" to={"/"}>TRACTO</NavLink>
                        {/* <h1>TRACTO</h1> */}
                    </li>
                    <li className="listItem">
                        <NavLink className="itemName" to={"category/shorts"}>Shorts</NavLink>
                    </li>
                    <li className="listItem">
                        <NavLink className="itemName" to={"category/bodies"}>Bodies</NavLink>
                    </li>
                    <li className="listItem contact">
                        <NavLink className="itemName" to={"category/tops"}>Tops</NavLink>
                    </li>
                </div>
                <div className="cartContainer">
                    <li className="cart">
                        <NavLink className="itemName" to="#"><CartWidget /></NavLink>
                    </li>
                    <li>
                        <h2 className="contador">0</h2>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar 
