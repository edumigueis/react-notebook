import React, { useState, useEffect } from "react";
import "../styles/noteHeader.css";
import { FaPen } from "react-icons/fa";
import ColorPicker from "./ColorPicker";
import TitleInput from "./TitleInput";

const NoteHeader = ({ title, date, color, newNote, onEdit }) => {
  const [titleState, setTitleState] = useState(title);
  const [colorState, setColorState] = useState(color);
  const [pickerOpen, setPickerOpen] = useState("none");

  useEffect(() => {
    setColorState(color);
  }, [color]);

  const handleChange = (title) => {
    setTitleState(title);
    onEdit({
      title: titleState,
      color: colorState,
      text: "",
    });
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
        <TitleInput onBlur={handleChange} title={title} />
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
