import React, { useState } from "react";

// https://gist.github.com/6174/6062387
export function randomString() {
  return Math.random().toString(36).substring(2, 8);
}

function Checkbox({ index }) {
  const [isVisible, setIsVisible] = useState(false);

  const inputId = randomString();

  const checkboxHtml = isVisible ? (
    <div className={`left--${randomString()} field--${randomString()}`}>
      <div
        className={`checkboxWrapper--${randomString()} medium--${randomString()}`}
      >
        <input
          type="checkbox"
          id={`checkbox_${inputId}`}
          className={`checkbox--${randomString()}`}
        />
        <label
          htmlFor={`checkbox_${inputId}`}
          className={`label--${randomString()}`}
        >
          Pay in parts
        </label>
      </div>
    </div>
  ) : null;

  const buttonText = isVisible
    ? `Hide Checkbox ${index}`
    : `Show Checkbox ${index}`;

  return (
    <div style={{ display: "block" }}>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {buttonText}
      </button>
      {checkboxHtml}
    </div>
  );
}

export default Checkbox;
