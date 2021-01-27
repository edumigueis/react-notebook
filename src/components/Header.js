import React from 'react'
import "../styles/header.css";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className="main-header">
            <h1>Notes</h1>
            <div className="icon-wrapper">
                <FaSearch style={{color: "#2f2f2f"}}/>
            </div>
        </header>
    )
}

export default Header
