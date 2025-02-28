const Testimonials = () => {
  return (
    <div className="reviews lg:mx-[3rem] mx-[1rem] my-[6rem]">
      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mb-[3rem]">
        <h2 className="lg:text-[4.5rem] text-[2.5rem] font-bold text-black mb-[1.5rem] lg:text-center text-start">
          Customer <span className="boska-italic"> Reviews</span>
        </h2>

        <p className="lg:w-[500px] w-full lg:text-[1.2rem] text-[1rem]">
          Here’s what my clients say about our collaboration. Their satisfaction
          and meeting expectations are my top priorities, ensuring the best
          experience possible.
        </p>
      </div>

      <div className="lg:grid flex flex-col grid-cols-3 gap-[1rem]">
        <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
          <img
            src="./people01.png"
            alt=""
            className="w-[80px] h-[80px] mb-[32px]"
          />
          <h1 className="leading-[120%] mb-[16px] text-[25px] font-bold tracking-[-0.01em]">
            Emily Peters
          </h1>
          <div className="leading-[150%] text-[18px]">
          We are super happy with the final result. Kareem delivered a beautifully designed website that perfectly reflects our brand and what we were looking for.
          </div>
        </article>
        <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
          <img
            src="./people02.png"
            alt=""
            className="w-[80px] h-[80px] mb-[32px]"
          />
          <h1 className="leading-[120%] mb-[16px] text-[25px] font-bold tracking-[-0.01em]">
            Yuri Arkiash
          </h1>
          <div className="leading-[150%] text-[18px]">
          He delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.
          </div>
        </article>

        <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
          <img
            src="./people03.png"
            alt=""
            className="w-[80px] h-[80px] mb-[32px]"
          />
          <h1 className="leading-[120%] mb-[16px] text-[25px] font-bold tracking-[-0.01em]">
            Miles Falls
          </h1>
          <div className="leading-[150%] text-[18px]">
          I absolutely love the website! The AI agent works seamlessly, providing a smooth and efficient experience for visitors. It's a game-changer for our online presence.
          </div>
        </article>

        {/* <article className='bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow'>
                   <img src="./people01.png" alt="" className='w-[80px] h-[80px] mb-[32px]'/>
                   <h1 className='leading-[120%] mb-[16px] text-[32px] font-bold tracking-[-0.01em]'>Automations</h1>
                   <div className='leading-[150%] text-[18px]'>
                   Automate recurring invoices and save time by using pre-built templates. Get paid on time.
                   </div>
            </article> */}
      </div>
    </div>
  );
};

export default Testimonials;
