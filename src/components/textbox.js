import React from 'react';
const TextBox = ({ label, placeholder, height }) => {
  return (
    <div className='textbox' style={{ height: height }}>
      <div className='pos-rel'>
        <label>{label}</label>
      </div>
      <input placeholder={placeholder} />
    </div>
  );
};

export default TextBox;
