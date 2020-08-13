import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onchange}
        type="text"
        className="form-control"
        id={name}
        name={name}
      />
    </div>
  );
};

export default Input;
