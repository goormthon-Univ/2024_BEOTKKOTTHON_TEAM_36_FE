// InputWithSelectBox.js
import React from 'react';

function TwoInputs({ inputName, inputPlaceholder, formData, handleChange }) {
  return (
    <div>
      <p>From</p>
      <input
        placeholder={inputPlaceholder}
        name={inputName}
        value={formData[inputName]}
        onChange={handleChange}
      />
    </div>
  );
}

export default TwoInputs;
