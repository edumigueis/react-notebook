import React, {useState} from "react";
import "../styles/searchBox.css";

const SearchBox = ({ display, onSubmit }) => {
  const [keyWord, setKeyWord] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(keyWord);
    }
  };

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <div className="search-box-container" style={{ display: display }}>
      <input
        type="text"
        placeholder="Search note"
        onChange={handleChange}
        value={keyWord}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBox;
