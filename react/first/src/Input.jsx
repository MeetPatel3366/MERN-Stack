// Build an input field where users can type text, and the text is displayed live below it.
// Use onChange to capture input
// Store input in state
// Render the live preview in a paragraph element

import React, { useState } from "react";

export default function Input({label,inputType,placeholder="enter something..."}) {
  const [text, setText] = useState("");

  return (
    <div>
      <label>{label}</label>
      <input
        type={inputType}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
      />

      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
