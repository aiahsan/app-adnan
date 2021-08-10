import React from 'react';
import CountButton from './countButton';
import TopBarHeading from './TopBarHeading';
import AdminPanel from './adminPanel';

const Footer = () => {
  return (
    <>
      <div className='top-border cst-brd-margin'></div>
      <CountButton title='Word Count' count='245' />
      <CountButton title='Characters' count='130' />
      <CountButton title='Pages' count='05' />
      <div className='top-border cst-brd-margin'></div>
      <div>
        <TopBarHeading title='Help' name='help' isActive={false} />
        <TopBarHeading title='Settings' name='setting' isActive={false} />
      </div>
      <AdminPanel />
    </>
  );
};
export default Footer;
