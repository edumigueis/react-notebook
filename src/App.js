import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Note from "./components/Note";
import AddNoteButton from "./components/AddNoteButton";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 0,
      title: "Meeting Report",
      color: "#E6EE9B",
      date: "January 10, 2021",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus molestie magna. Nullam a vehicula libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac metus nisi. Praesent malesuada rhoncus ligula, sit amet lacinia sapien blandit a. In id eros et ex fringilla congue. Donec diam arcu, facilisis quis arcu id, scelerisque sagittis mauris. Sed sodales scelerisque lacinia. Duis congue diam in ex consectetur, pulvinar commodo lorem interdum. Praesent eu dignissim lacus. Aenean facilisis venenatis pharetra. Integer tincidunt sit amet justo nec congue. Vivamus rhoncus sem vitae tempor sollicitudin. Sed quam ipsum, fermentum ac lectus at, accumsan dictum nisl. Duis mollis augue dolor, non finibus nunc molestie ac. Maecenas sagittis eget mi quis rutrum. Nullam in ornare sapien. Morbi in ullamcorper tortor. Ut iaculis elit blandit dui sodales convallis. Aenean varius vitae velit vel sagittis. Nunc tempus metus eget elementum egestas.",
    },
    {
      id: 1,
      title: "My Diary",
      color: "#FFCC80",
      date: "January 21, 2021",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus molestie magna. Nullam a vehicula libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac metus nisi. Praesent malesuada rhoncus ligula, sit amet lacinia sapien blandit a. In id eros et ex fringilla congue. Donec diam arcu, facilisis quis arcu id, scelerisque sagittis mauris. Sed sodales scelerisque lacinia. Duis congue diam in ex consectetur, pulvinar commodo lorem interdum. Praesent eu dignissim lacus. Aenean facilisis venenatis pharetra. Integer tincidunt sit amet justo nec congue. Vivamus rhoncus sem vitae tempor sollicitudin. Sed quam ipsum, fermentum ac lectus at, accumsan dictum nisl. Duis mollis augue dolor, non finibus nunc molestie ac. Maecenas sagittis eget mi quis rutrum. Nullam in ornare sapien. Morbi in ullamcorper tortor. Ut iaculis elit blandit dui sodales convallis.",
    },
    {
      id: 2,
      title: "UI Ideas for the Fair",
      color: "#CF93D9",
      date: "December 20, 2020",
      text:
        "Fusce metus lectus, hendrerit vitae bibendum vel, rutrum iaculis urna. Sed ligula ipsum, viverra quis dapibus nec, placerat in nisl. Quisque suscipit ut augue ac ullamcorper. Ut vehicula purus nec molestie vehicula. Nam massa erat, sagittis sit amet efficitur vitae, facilisis dignissim nibh. Donec egestas velit sit amet elit egestas malesuada. Donec varius vitae libero et suscipit. Morbi non lacus imperdiet, suscipit nisl eu, tristique odio. Pellentesque quam nunc, tincidunt sit amet erat a, volutpat placerat augue. Donec mollis aliquam lacinia. Suspendisse ligula leo, consectetur eu dapibus eget, pretium et eros. Nulla egestas urna a diam congue viverra. Nunc imperdiet egestas magna, venenatis finibus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dui laoreet magna scelerisque mollis.",
    },
    {
      id: 3,
      title: "React Project Ideas",
      color: "#80DEEA",
      date: "February 20, 2020",
      text:
        "Aenean ullamcorper diam in lectus vestibulum, vel euismod arcu lacinia. Nullam fermentum sit amet odio in tincidunt. Aenean luctus risus efficitur neque pulvinar maximus. Nam sit amet aliquet dui. Nunc consequat tristique volutpat. In ac metus id leo scelerisque malesuada. Nullam in pellentesque erat, at semper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Notes of biology class",
      color: "#FFAB91",
      date: "June 7, 2020",
      text:
        "Phasellus ac leo in odio lacinia sollicitudin. Nulla a aliquam tellus. Nunc sed vehicula velit. Vivamus vel auctor sem. Fusce in dui eros. Proin feugiat ex id velit dictum tempus. Nullam consequat sagittis velit quis molestie. Donec ac nisl at leo tempus pretium. Praesent cursus id elit ornare mattis. Nam ac ante at libero varius feugiat convallis sed elit. Etiam imperdiet tortor sed magna finibus, vel dignissim nulla luctus.",
    },
  ]);

  const [searchRes, setSearchRes] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
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
    let index = newArray.findIndex((x) => x.id === currentNote);
    newArray[index] = {
      id: currentNote,
      title: changes.title,
      color: changes.color,
      date: newArray[index].date,
      text: newArray[index].text,
    };
    setNotes(newArray);
  };

  const editNoteText = (text) => {
    const newArray = [...notes];
    let index = newArray.findIndex((x) => x.id === currentNote);
    newArray[index] = {
      id: currentNote,
      title: newArray[index].title,
      color: newArray[index].color,
      date: newArray[index].date,
      text: text,
    };
    setNotes(newArray);
  };

  const searchNotes = (keyWord) => {
    let aux = [...notes];
    if (keyWord.trim() !== "") {
      setIsSearching(true);
      setSearchRes(
        aux.filter(
          (note) =>
            note.title.toUpperCase().includes(keyWord.toUpperCase()) === true
        )
      );
    } else {
      setIsSearching(false);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="notes-container">
          <Header onSubmitSearch={searchNotes} />
          {notes.length > 0 ? (
            isSearching === true ? (
              <Notes
                notes={searchRes}
                onDelete={deleteNote}
                onClick={openNote}
              />
            ) : (
              <Notes notes={notes} onDelete={deleteNote} onClick={openNote} />
            )
          ) : (
            <div className="err-notes-list-wrapper">
              <p>No notes to show</p>
            </div>
          )}
        </div>
        <div className="current-note-container">
          {currentNote !== undefined ? (
            <Note
              note={notes.find((x) => x.id === currentNote)}
              newNote={addNote}
              onEdit={editNote}
              onTextEdit={editNoteText}
            />
          ) : (
            ""
          )}
        </div>
        <AddNoteButton newNote={addNote} />
      </div>
    </div>
  );
}

export default App;
