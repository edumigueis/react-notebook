import React from "react";
import Item from "./Item";
import "../styles/notes.css";
const Notes = ({ notes, onDelete, onClick }) => {
  return (
    <div className="notes-wrapper">
      {notes.map((note, index) => (
        <Item key={index} note={note} onDelete={onDelete} onClick={onClick} />
      ))}
    </div>
  );
};

export default Notes;
