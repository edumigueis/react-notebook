import React from "react";
import "../styles/item.css";
import { FaChevronRight } from "react-icons/fa";

const Item = ({ title, date, color }) => {
  return (
    <div className="item-wrapper">
      <div className="inner-item-wrapper">
        <div className="item-tag" style={{ backgroundColor: color }}></div>
        <div className="item-text">
          <p>{date}</p>
          <h5>{title}</h5>
        </div>
      </div>
      <FaChevronRight style={{ color: "#ccc", cursor: "pointer" }} />
    </div>
  );
};

export default Item;
