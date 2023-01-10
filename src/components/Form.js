import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <input
        className="form-component"
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </div>
  );
};

export default Form;
