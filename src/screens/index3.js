import React from 'react';
import Footer from '../components/footer';
import TopBarHeading from '../components/TopBarHeading';
import TextBox from '../components/textbox';
import GreenButton from '../components/greenbutton';
const index = () => {
  return (
    <div className='container main'>
      <div className='bg-title-btn'>
        <TopBarHeading isActive={true} name='card' title='Content Outline' />
      </div>
      <TextBox
        label='Enter Keywords'
        placeholder='Walkng health benefits'
        height='94px'
      />
      <div className='mb-35'>
        <GreenButton title='Create Outline' />
      </div>
      <Footer />
    </div>
  );
};

export default index;
