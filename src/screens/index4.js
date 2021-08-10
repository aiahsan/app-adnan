import React from 'react';
import Footer from '../components/footer';
import TopBarHeading from '../components/TopBarHeading';
import GreenButton from '../components/greenbutton';
import WhiteButton from '../components/whitebutton';
const index = () => {
  return (
    <div className='container main'>
      <div className='bg-title-btn'>
        <TopBarHeading
          isActive={true}
          name='write'
          title='Al Write Assistant'
        />
      </div>
      <div className='w-assistant'>
        <label>Content Length</label>
        <div className='track'>
          <div className='t-1'></div>
          <div className='t-2'>
            <div className='flex-main active'>
              <div className='tt-a'></div>
              <label>Short</label>
            </div>
            <div className='flex-main'>
              <div className='tt-u'></div>
              <label>Medium</label>
            </div>
            <div className='flex-main'>
              <div className='tt-u'></div>
              <label>Long</label>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-write'>
        <GreenButton title='Write' />
      </div>
      <div className='btn-whites'>
        <WhiteButton title='Rewrite' />
        <WhiteButton title='Expand' />
        <WhiteButton title='Rephrase' />
      </div>
      <Footer />
    </div>
  );
};

export default index;
