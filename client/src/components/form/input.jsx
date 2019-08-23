import React from "react";

import "./form.scss";

const Input = props => (
  <div className="group">
    <input className="form-input" {...props} />

    {props.label && (
      <label className={`${props.value.length && "shrink"} form-input-label`}>
        {props.label}
      </label>
    )}
  </div>
);

export default Input;
