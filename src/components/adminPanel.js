import React from 'react';
import Icon from '../styles/icon';
const AdminPanel = () => {
  return (
    <div className='pos-rel'>
      <div className='admin-panel'>
        <div className='d-flex'>
          <div>
            <div className='sts'></div>
            <img src='/e1.png' alt='' />
          </div>
          <div>
            <h1>Dark_Emeralds</h1>
            <p>Admin</p>
          </div>
        </div>
        <div>
          <button>
            <Icon name='more' />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminPanel;
