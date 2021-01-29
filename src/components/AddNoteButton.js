import React from "react";
import "../styles/addNoteButton.css";
import { FaPlus } from "react-icons/fa";
const AddNoteButton = ({ newNote }) => {
  return (
    <div onClick={() => newNote()} className="main-add-btn">
      <FaPlus color="#fefefe" size="20px" />
    </div>
  );
};

export default AddNoteButton;
