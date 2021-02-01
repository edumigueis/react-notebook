import React, { useState, useEffect } from "react";

const TitleInput = ({ onBlur, title }) => {
  const [titleState, setTitleState] = useState(title);

  useEffect(() => {
    setTitleState(title);
  }, [title])

  const handleChange = (e) => {
    setTitleState(e.target.value);
  };

  return (
    <div>
      <input
        value={titleState}
        onChange={handleChange}
        onBlur={() => onBlur(titleState)}
        id="title-input"
        spellCheck={false}
      />
    </div>
  );
};

export default TitleInput;
