import React, { useState, useEffect } from "react";

const NoteBody = ({ onBlur, text }) => {
  const [textState, setTextState] = useState(text);

  useEffect(() => {
    setTextState(text);
  }, [text]);

  const handleChange = (e) => {
    setTextState(e.target.value);
  };

  return (
    <div>
      <textarea
        spellCheck={false}
        value={textState}
        onChange={handleChange}
        onBlur={() => onBlur(textState)}
        id="text-input"
        name="note"
      />
    </div>
  );
};

export default NoteBody;
