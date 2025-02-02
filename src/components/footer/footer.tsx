
const Footer = () => {
  return (
    <footer className="footer mt-[5rem]">
    <div className="footer_container container-1 mx-[2rem]">
      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between gap-[2rem]  mb-[2rem]">
          <div className="lg:mb-[3rem] lg:w-[50%] w-auto">
             <a className="" href="/">
              <img src="./logo-1.jpeg" alt="" className='w-[10rem] object-contain'/>
             </a>

            <div
              className="mt-[.5rem] lg:text-[.9rem] text-[.8rem]"
              id="footer-text"
            >
              Elevate Your Digital Presence with Bakhtech Solutions. Crafting Professional Websites for Every Business. Precision, Performance, Perfection – Your Success, Our Mission.
            </div>
          </div>

             <div >
                <h2 className='text-[1rem] font-bold mb-[1rem] uppercase'>Navigation</h2>
              <div className="flex items-start flex-col lg:text-[1rem] text-[.9rem] font-medium lg:gap-[1.4rem] gap-[1rem]">
                <a href="/">Home</a>
                <a href="/about">About us</a>
                <a href="/contact">Testimonials</a>
                <a href="/products">FAQs</a>
              </div>
              </div>

        {/* <div className="flex items-start lg:gap-[4rem] flex-row gap-[1rem] lg:mb-0 mb-[1.5rem]"> */}


              <div>
                <h2 className='text-[1rem] font-bold mb-[1rem] uppercase'>Socials</h2>
              <div className="flex items-start flex-col lg:text-[1rem] text-[.9rem] font-medium capitalize  lg:gap-[1.4rem] gap-[1rem]">
                <a href="/">Home</a>
                <a href="/about">About us</a>
                <a href="/contact">Contact us</a>
              </div>
              </div>
          {/* </div> */}

      </div>

      <p className='text-center border-t  mx-auto flex items-center justify-center text-[1.1rem] w-full py-[1rem] mt-[1.5rem]'>© 2024, Bakhtech Solutions .All right reserved.</p>
    </div>
  </footer>
  )
}

export default Footer