import Image from '../assets/8.jpg'
function Home2() {
    return (
      <>
      <div id='home2'>
        <div className='vcent'>
        <div className=" container d-flex hom">
            <div className='tcent'>
                <h2>We help vitamin & supplement brands grow by generating sales through Paid Advertisements</h2>
                <div className='bdtxt1 mt-5'>Stop wasting time and money on faulty and ineffective ad campaigns.
                It's time to make your ad-budget count, scale your business and blow up your sales.
                </div>
            </div>
            <div><img src={Image} alt=' ' className='bg2'/></div>
        </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Home2;