import React from "react";
import "../styles/colorPicker.css";

const ColorPicker = ({ colors, margin, display, onPick }) => {
  return (
    <div style={{ display: display }}>
      <div className="color-picker-wrapper" style={{ margin: margin }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => onPick(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
