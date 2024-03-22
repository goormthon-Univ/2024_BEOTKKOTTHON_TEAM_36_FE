import React from 'react';

function InputWithButton({
  name,
  className,
  placeholder,
  onButtonClick,
  value,
  onChange,
}) {
  return (
    <div className={`${className}-container`} style={{ position: 'relative' }}>
      <input
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className={`${className}Button`}
        onClick={onButtonClick}
        // disabled={!value.trim()}
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
        }}
      >
        Re
      </button>
    </div>
  );
}

export default InputWithButton;
