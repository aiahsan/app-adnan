import React from 'react';
import Footer from '../components/footer';
import TopBarHeading from '../components/TopBarHeading';
import { useHistory } from 'react-router-dom';
const TopBar = () => {
  const history = useHistory();
  return (
    <div className='main'>
      <TopBarHeading
        onClick={() => history.push('/')}
        name='idea'
        isActive={true}
        title='Content Ideas'
      />
      <TopBarHeading
        name='idcard'
        isActive={false}
        title='Title & Introduction'
        onClick={() => history.push('home1')}
      />
      <TopBarHeading
        name='card'
        isActive={false}
        title='Content Outline'
        onClick={() => history.push('home2')}
      />
      <TopBarHeading
        name='write'
        isActive={false}
        title='Al Write Assistant'
        onClick={() => history.push('home3')}
      />
      <TopBarHeading
        name='document'
        isActive={false}
        title='Meta Title & Description'
        onClick={() => history.push('home4')}
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
