import React from 'react';
import Footer from '../components/footer';
import TopBarHeading from '../components/TopBarHeading';
import TextBox from '../components/textbox';
import GreenButton from '../components/greenbutton';
const index = () => {
  return (
    <div className='container main'>
      <div className='bg-title-btn'>
        <TopBarHeading
          isActive={true}
          name='idcard'
          title='Title & Introduction'
        />
      </div>
      <TextBox
        label='Enter Keywords'
        placeholder='Creating the best headlines'
        height='34px'
      />
      <GreenButton title='Generate Title' />
      <TextBox
        label='Describe Your Article'
        placeholder='How to create a great headline'
        height='54px'
      />
      <GreenButton title='Generate Introduction' />

      <Footer />
    </div>
  );
};

export default index;
