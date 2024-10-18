import Image from '../assets/9.png'
function Aboutus() {
    return (
      <>
      <div id='aboutus'>
      <div className='vcent'>
        <div className='bdtxt2 head m-1'>Who Are <span className='btxt'>We</span>?</div>
        <div className="container d-flex hom">
            <div><img src={Image} alt=' ' className='bg2'/></div>
            <div className='tcent'>
                <div className='bdtxt1 bdtxt2 mt-5'>Sales Glide is your premier digital marketing
                 agency, dedicated to elevating vitamin and supplement brands through expertly crafted 
                 Meta ad campaigns. With a passion for results and a deep understanding of the industry,
                  we harness the power of paid advertising to drive growth and success for your brand.
                   Join us on the journey to marketing excellence.
                </div>
            </div>
        </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Aboutus;