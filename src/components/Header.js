import React, { useState } from "react";
import "../styles/header.css";
import { FaSearch } from "react-icons/fa";
import SearchBox from "./SearchBox";

const Header = ({onSubmitSearch}) => {
  const [searchVisible, setSearchVisible] = useState("none");

  const toggleVisibility = () => {
    searchVisible === "block" ? setSearchVisible("none"): setSearchVisible("block")
  }

  return (
    <header className="main-header">
      <h1>Notes</h1>
      <div className="search-wrapper">
        <SearchBox display={searchVisible} onSubmit={onSubmitSearch}/>
        <div className="icon-wrapper" onClick={toggleVisibility}>
          <FaSearch style={{ color: "#2f2f2f" }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
