import './App.css';
import Header from './components/Header';
import Notes from './components/Notes';
import Note from './components/Note';

function App() {
  const notes = [
    {
      title: "Meeting Report",
      color: "#E6EE9B",
      date: "January 10, 2021"
    },
    {
      title: "My Diary",
      color: "#FFCC80",
      date: "January 21, 2021"
    },
    {
      title: "UI Ideas for the Fair",
      color: "#CF93D9",
      date: "December 20, 2020"
    },
    {
      title: "React Project Ideas",
      color: "#80DEEA",
      date: "February 20, 2020"
    },
    {
      title: "Notes of biology class",
      color: "#FFAB91",
      date: "June 7, 2020"
    }
  ]
  return (
    <div className="App">
      <div className="wrapper">
        <div className="notes-container">
          <Header />
          <Notes notes={notes} />
        </div>
        <div className="current-note-container">
          <Note />
        </div>
      </div>
    </div>
  );
}

export default App;
