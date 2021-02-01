import React from "react";
import "../styles/note.css";
import NoteHeader from "../components/NoteHeader";
import NoteBody from "./NoteBody";

const Note = ({ note, newNote, onEdit, onTextEdit }) => {

  const handleTextChange = (text) => {
    onTextEdit(text);
  };

  if (note === undefined) {
    return (
      <div className="note-err-wrapper">
        <div>
          <h3>;)</h3>
          <h3>Select a note to open.</h3>
        </div>
      </div>
    );
  } else
    return (
      <div className="note-wrapper">
        <div className="non-scrollable-note-content">
          <NoteHeader
            title={note.title}
            date={note.date}
            color={note.color}
            newNote={newNote}
            onEdit={onEdit}
          ></NoteHeader>
          <NoteBody text={note.text} onBlur={handleTextChange}/>
        </div>
      </div>
    );
};

export default Note;
