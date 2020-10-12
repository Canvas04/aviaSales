import React from "react";
import classes from './checkbox.module.scss';
import {connect} from 'react-redux';
const {labelText} = classes;


 function Checkbox({check}) {
   console.log(check);
   const elements = check.map(item => {
     return (
    <div className="form-check" style={{marginBottom: '20px'}} key={item.id}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
        checked={item.checked}
        onChange={() => {}}
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        <span className={labelText}>{item.label}</span>
      </label>
    </div>
  );
   })
  return <> {elements}</>
}
const mapStateToProps = (state) => {
  return {
check: state.check
  }
}

export default connect(mapStateToProps)(Checkbox);