import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
function Process() {
    return (
      <>
      <div id='process'>
      <div className='vcent'>
        <div className='bdtxt2 head mb-5'>Our <span className='btxt'>Process</span>?</div>
        <div className="container">
  <div className="row">
    <div className="col d-flex flex-column proc">
      <div className="text-white">
        <div className="d-flex pnt mb-3">
          <img src={one} alt=" " className="crs" />
          <div className="font-weight-bold txtl">Gather content</div>
        </div>
        <div>
          We gather all the materials and resources needed to create effective ads,
          ensuring your brand's message is ready to shine in the digital world
        </div>
      </div>
    </div>

    <div className="col d-flex flex-column proc">
      <div className="text-white">
        <div className="d-flex pnt mb-3">
          <img src={two} alt=" " className="crs" />
          <div className="font-weight-bold txtl">Launch Ads</div>
        </div>
        <div>
          Next, we launch ads based on the content we've collected. These ads are
          strategically designed and placed on popular social media platforms in front
          of the right audience at the right time to maximize visibility and engagement.
        </div>
      </div>
    </div>

    <div className="col d-flex flex-column proc">
      <div className="text-white">
        <div className="d-flex pnt mb-3">
          <img src={three} alt=" " className="crs" />
          <div className="font-weight-bold txtl">Generate sales</div>
        </div>
        <div>
          We employ strategic tactics to drive sales, transforming leads into satisfied
          customers for your company, while maximizing revenue and growth opportunities.
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
      </>
    );
  }
  
  export default Process;