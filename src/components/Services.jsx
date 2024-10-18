import React, { useState } from 'react';
import cross from "../assets/cross.png"
import Form from './Form';
function Services() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

    return (
      <>
      <div id='services'>
      <div className='vcent'>        
      <div className='head m-4'>What We <span className='btxt'>Offer</span>?</div>
      <div className="container d-flex hom">
            <div>
              <div className="txtl font-weight-bold">PAID ADVERTISING</div>
              <div className="mt-3 mb-3">Ads, Just Ads.</div>
              <div className="mb-2">We do one thing - we just do it with a monastic focus and better than anyone else. 
                If you want an agency that offers a full-service solution of everything that won’t 
                move the needle forward, We're not the right fit for you. </div>
              <div>If you want an agency where with two clicks, you can get a clear breakdown of 
                how much was spent, how much was made & what your net profit was - we’re 
                for you</div>
              <div className='mbtn cenb' onClick={openForm}>
              Book a Free Strategy Session
              </div>
            </div>
            <div>
              <div className="font-weight-bold txtm">MASTERY DEMANDS FOCUS SO....</div>
              <div className="txtm">We don't offer any other services except for paid advertising...</div>
              <div className="mt-3">
              <div className="d-flex m-2"><img src={cross} alt=" " className="crs"/><div class="font-weight-bold m-2 txtm">WEBDESIGN</div></div>
              <div className="d-flex m-2"><img src={cross} alt=" " className="crs"/><div class="font-weight-bold m-2 txtm">CONTENT CREATION</div></div>
              <div className="d-flex m-2"><img src={cross} alt=" " className="crs"/><div class="font-weight-bold m-2 txtm">EMAIL MARKETING</div></div>
              <div className="d-flex m-2"><img src={cross} alt=" " className="crs"/><div class="font-weight-bold m-2 txtm">SOCIAL MEDIA MANAGEMENT</div></div>
              <div className="d-flex m-2"><img src={cross} alt=" " className="crs"/><div class="font-weight-bold m-2 txtm">INSTAGRAM GROWTH</div></div>
              <div className="d-flex m-2"><img src={cross} alt=" " className="crs"/><div class="font-weight-bold m-2 txtm">PR SERVICE</div></div>
              </div>
            </div>
        </div>
      </div>
      </div>
      <Form isOpen={isFormOpen} onClose={closeForm} />
      </>
    );
  }
  
  export default Services;