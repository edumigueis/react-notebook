import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Note from "./components/Note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 0,
      title: "Meeting Report",
      color: "#E6EE9B",
      date: "January 10, 2021",
      text: "",
    },
    {
      id: 1,
      title: "My Diary",
      color: "#FFCC80",
      date: "January 21, 2021",
      text: "",
    },
    {
      id: 2,
      title: "UI Ideas for the Fair",
      color: "#CF93D9",
      date: "December 20, 2020",
      text: "",
    },
    {
      id: 3,
      title: "React Project Ideas",
      color: "#80DEEA",
      date: "February 20, 2020",
      text: "",
    },
    {
      id: 4,
      title: "Notes of biology class",
      color: "#FFAB91",
      date: "June 7, 2020",
      text: "",
    },
  ]);

  const [currentNote, setCurrentNote] = useState(0);

  const deleteNote = (id) => {
    console.log("del", id);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const openNote = (id) => {
    console.log("open", id);
    setCurrentNote(id);
  };

  const addNote = () => {
    console.log("new");
    const id = Math.floor(Math.random() * 10000) + 1;

    console.log(id);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    const newNote = {
      id: id,
      title: "New Note",
      color: "#FFCC80",
      date: months[parseInt(mm) - 1] + " " + dd + ", " + yyyy,
      text: "",
    };

    setNotes([...notes, newNote]);
  };

  const editNote = (changes) => {
    const newArray = [...notes];
    console.log(changes);
    let index = newArray.findIndex((x) => x.id === currentNote);
    newArray[index] = {
      id: currentNote,
      title: changes.title,
      color: changes.color,
      date: newArray[index].date,
      text: changes.text,
    };
    setNotes(newArray);
    console.log(notes);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="notes-container">
          <Header />
          {notes.length > 0 ? (
            <Notes notes={notes} onDelete={deleteNote} onClick={openNote} />
          ) : (
            "No notes to show"
          )}
        </div>
        <div className="current-note-container">
          {currentNote !== undefined ? (
            <Note
              note={notes.find((x) => x.id === currentNote)}
              newNote={addNote}
              onEdit={editNote}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
