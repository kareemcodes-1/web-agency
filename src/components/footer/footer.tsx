const Footer = () => {
  return (
    <footer className="footer mt-[5rem] pb-[4rem]">
      <div className="footer_container container-1 mx-[2rem]">
        <div className="flex lg:flex-row flex-col lg:items-center items-start  lg:gap-[10rem] gap-[2rem]  mb-[2rem]">
          <div className="lg:mb-[3rem] w-auto">
            <a className="" href="/">
              <h1 className="text-[1.5rem] font-bold nav-logo">
                bykareem<sup>©</sup>
              </h1>
            </a>

            <div
              className="mt-[.5rem] lg:text-[1.1rem] text-[1rem] lg:w-[500px] w-full"
              id="footer-text"
            >
              Transform Your Online Identity. Building Bespoke Websites That
              Empower Your Brand. Innovation, Excellence, and Results Your
              Vision, Our Commitment
            </div>
          </div>

          <div>
            <h2 className="text-[1rem] font-bold mb-[1rem] uppercase">
              Navigation
            </h2>
            <div className="flex items-start flex-col lg:text-[1rem] text-[.9rem] font-medium lg:gap-[1.4rem] gap-[1rem]">
              <a href="/">Home</a>
              <a href="/">About us</a>
              <a href="/">Testimonials</a>
              <a href="/">FAQs</a>
            </div>
          </div>

          {/* <div className="flex items-start lg:gap-[4rem] flex-row gap-[1rem] lg:mb-0 mb-[1.5rem]"> */}

          <div>
            <h2 className="text-[1rem] font-bold mb-[1rem] uppercase">
              Socials
            </h2>
            <div className="flex items-start flex-col lg:text-[1rem] text-[.9rem] font-medium capitalize  lg:gap-[1.4rem] gap-[1rem]">
              <a href="https://www.tiktok.com/@kareemcodes?_t=ZS-8yzslsjdyqr&_r=1"  target="_blank">Tiktok</a>
              <a  href='https://x.com/kareembraimoh_' 
           target='_blank'>Twitter</a>
              <a  href='https://wa.link/4szetj' 
           target='_blank'>Whatsapp</a>
            </div>
          </div>
          {/* </div> */}
        </div>

        <p className="text-center border-t  mx-auto flex items-center justify-center text-[1.1rem] w-full py-[1rem] mt-[1.5rem]">
          <span className="lg:block hidden">© 2024</span> &nbsp;{" "}
          <span className="nav-logo font-bold text-[1.3rem]">
            bykareem <sup>©</sup>
          </span>{" "}
          &nbsp; <span className=" lg:block hidden">All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
