// InputWithSelectBox.js
import React from 'react';
import SelectBox from './SelectBox';

function InputWithSelectBox({
  inputName,
  inputPlaceholder,
  selectType,
  selectName,
  formData,
  handleChange,
}) {
  return (
    <div className="Q">
      <p>To</p>
      <input
        className="name-input"
        placeholder={inputPlaceholder}
        name={inputName}
        value={formData[inputName]}
        onChange={handleChange}
      ></input>
      <SelectBox
        // className="inputs"
        selecType={selectType}
        name={selectName}
        value={formData[selectName]}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputWithSelectBox;
