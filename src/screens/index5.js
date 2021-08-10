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
          name='document'
          title='Meta Title & Description'
        />
      </div>
      <TextBox
        label='Enter Keywords'
        placeholder='Creating SEO Titles'
        height='34px'
      />
      <GreenButton title='Generate Title' />
      <TextBox
        label='Describe Content'
        placeholder='Content explains how to create eye catching titles'
        height='54px'
      />
      <GreenButton title='Generate Introduction' />

      <Footer />
    </div>
  );
};

export default index;
