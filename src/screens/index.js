import React from 'react';
import Footer from '../components/footer';
import TopBarHeading from '../components/TopBarHeading';
const TopBar = () => {
  return (
    <div className='main'>
      <TopBarHeading name='idea' isActive={true} title='Content Ideas' />
      <TopBarHeading
        name='idcard'
        isActive={false}
        title='Title & Introduction'
      />
      <TopBarHeading name='card' isActive={false} title='Content Outline' />
      <TopBarHeading name='write' isActive={false} title='Al Write Assistant' />
      <TopBarHeading
        name='document'
        isActive={false}
        title='Meta Title & Description'
      />
    </div>
  );
};

const index = () => {
  return (
    <div className='container'>
      <TopBar />
      <Footer />
    </div>
  );
};

export default index;
