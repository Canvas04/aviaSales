import React from "react";
import classes from './checkbox.module.scss';
const {labelText} = classes;

export default function Checkbox({ label }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        <span className={labelText}>{label}</span>
      </label>
    </div>
  );
}
