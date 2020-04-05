import React from "react";
import Checkbox, { randomString } from "./Checkbox";

function App() {
  const inputId = randomString();

  return (
    <React.Fragment>
      <Checkbox index={1} />
      <Checkbox index={2} />

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
    </React.Fragment>
  );
}

export default App;
