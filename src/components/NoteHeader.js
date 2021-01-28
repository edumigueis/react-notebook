import { useState } from "react";
import "../styles/noteHeader.css";
import { FaPen } from "react-icons/fa";
import ColorPicker from "./ColorPicker";

const NoteHeader = ({ title, date, color, newNote, onEdit }) => {
  const [titleState, setTitleState] = useState(title);
  const [colorState, setColorState] = useState(color);
  const [pickerOpen, setPickerOpen] = useState("none");

  const handleChange = (e) => {
    setTitleState(e.target.value);
  };

  const handleColorPick = (color) => {
    setColorState(color);
    onEdit({
      title: titleState,
      color: color,
      text: "",
    });
  };

  return (
    <div className="note-header">
      <div>
        <input
          onChange={handleChange}
          value={titleState}
          onBlur={() =>
            onEdit({
              title: titleState,
              color: colorState,
              text: "",
            })
          }
          id="title-input"
        />
        <h6>{date}</h6>
      </div>
      <div className="side-gadgets">
        <div
          className="note-header-tag"
          style={{ backgroundColor: colorState }}
          onClick={() => {
            pickerOpen === "none"
              ? setPickerOpen("block")
              : setPickerOpen("none");
          }}
        >
          <ColorPicker
            colors={["#E6EE9B", "#FFCC80", "#CF93D9", "#80DEEA", "#FFAB91"]}
            margin={"15px 0 0 -90px"}
            display={pickerOpen}
            onPick={handleColorPick}
          />
        </div>
        <div className="icon-wrapper" onClick={() => newNote()}>
          <FaPen style={{ color: "#2f2f2f" }} />
        </div>
      </div>
    </div>
  );
};

export default NoteHeader;
