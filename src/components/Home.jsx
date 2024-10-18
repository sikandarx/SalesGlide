import React, { useState } from 'react';
import Navbar from './Navbar';
import Form from './Form';

function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div id='home'>
        <Navbar />
        <div className='bg1'>
          <div className='bgtxt1'>
            <div className='head1'>
              Digital Marketing Agency For <span className='btxt'>Vitamin</span> & <span className='btxt'>Supplement</span> Brand
            </div>
            <div className='mbtn' onClick={openForm}>
              Book a Free Strategy Session
            </div>
            <Form isOpen={isFormOpen} onClose={closeForm} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
