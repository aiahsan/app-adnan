import React from 'react';
import Icon from '../styles/icon';
const TopBarHeading = ({ title, isActive, name }) => {
  return (
    <div className='d-flex top-head'>
      <Icon name={name} color={isActive == true ? '#0D1841' : '#8190A4'} />
      <h1 className={isActive == true ? 'heading-text' : 'heading-text-1'}>
        {title}
      </h1>
    </div>
  );
};
export default TopBarHeading;
