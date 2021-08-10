import React from 'react';
const CountButton = ({ title, count }) => {
  return (
    <div className='d-flex count-btn'>
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};
export default CountButton;
