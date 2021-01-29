import React from "react";
import "../styles/note.css";
import NoteHeader from "../components/NoteHeader";

const Note = ({ note, newNote, onEdit }) => {
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
        <div className="scrollable-note-content">
          <NoteHeader
            title={note.title}
            date={note.date}
            color={note.color}
            newNote={newNote}
            onEdit={onEdit}
          ></NoteHeader>
          <span className="proper-note-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida elementum mauris, vel fermentum nunc efficitur in. Morbi
              varius urna a eleifend laoreet. Aliquam ac neque ac libero
              vulputate bibendum ut ac lectus. Curabitur eget orci id ex
              ultricies finibus ut id diam. Aenean vehicula, tellus viverra
              finibus eleifend, nibh lorem bibendum eros, non cursus justo
              tellus at justo. Duis a purus convallis, tristique ipsum ac,
              ornare diam.
            </p>{" "}
            <p>
              Donec placerat auctor erat condimentum bibendum. Proin dolor
              neque, tempor vel ante at, fermentum vestibulum justo. Proin at
              commodo ex, quis egestas nunc. Integer varius porta pellentesque.
              Maecenas in lacus eget elit feugiat vehicula. Nullam nec tincidunt
              odio. Suspendisse laoreet vel magna suscipit suscipit. Proin sit
              amet porttitor metus, at sodales mauris. Vivamus consectetur
              mollis justo, eleifend elementum ex tempus quis. Aliquam erat
              volutpat. Morbi accumsan nibh id malesuada consequat. Phasellus
              fermentum eros vel dignissim elementum. Proin rhoncus purus
              porttitor purus sagittis semper.{" "}
            </p>
          </span>
        </div>
      </div>
    );
};

export default Note;
