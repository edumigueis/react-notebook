import React, { useState } from "react";
import "../styles/item.css";
import { FaChevronRight, FaTrash } from "react-icons/fa";

const Item = ({ note, onDelete, onClick }) => {
  const openStyle = {
    color: "#ccc",
    cursor: "pointer",
    display: "block",
    marginRight: "10px",
  };
  const closeStyle = {
    color: "#ccc",
    cursor: "pointer",
    display: "none",
    marginRight: "10px",
  };

  const [openToDelete, setOpenToDelete] = useState(closeStyle);

  return (
    <div
      className="item-wrapper"
      onDoubleClick={() => {
        if (openToDelete.display !== "none") setOpenToDelete(closeStyle);
        else setOpenToDelete(openStyle);
      }}
      onClick={() => onClick(note.id)}
    >
      <div className="inner-item-wrapper">
        <div className="delete-icon-wrapper">
          <FaTrash
            style={openToDelete}
            onClick={() => {
              onDelete(note.id);
              setOpenToDelete({
                color: "#ccc",
                cursor: "pointer",
                display: "none",
                marginRight: "10px",
              });
            }}
          />
        </div>
        <div className="item-tag" style={{ backgroundColor: note.color }}></div>
        <div className="item-text">
          <p>{note.date}</p>
          <h5>{note.title}</h5>
        </div>
      </div>
      <FaChevronRight style={{ color: "#ccc", cursor: "pointer" }} />
    </div>
  );
};

export default Item;
