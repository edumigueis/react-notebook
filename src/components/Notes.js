import React from "react";
import Item from "./Item";
import "../styles/notes.css";
const Notes = ({ notes, onDelete }) => {
  return (
    <div className="notes-wrapper">
      {notes.map((note, index) => (
        <Item
          key={index}
          color={note.color}
          title={note.title}
          date={note.date}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Notes;
