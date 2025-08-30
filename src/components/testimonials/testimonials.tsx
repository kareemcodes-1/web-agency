import FadeContent from "../../lib/fade-content";
import AnimatedContent from "../../lib/animated-content";
import SplitText from "../../lib/split-text";

const Testimonials = () => {
  return (
    <div className="reviews lg:mx-[3rem] mx-[1rem] my-[6rem] ">
      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mb-[3rem]">
        {/* <h2 className="lg:text-[4.5rem] text-[2.5rem] font-bold text-black mb-[1.5rem] lg:text-center text-start">
          Customer <span className="boska-italic"> Reviews</span>
        </h2> */}

        <div className="leading-[1.2]">
          <SplitText
            text="Customer"
            delay={30}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            // easing="easeOutCubic"
            className="lg:text-[4.5rem] text-[2.5rem] font-bold text-black mb-[1.5rem] lg:text-center text-start"
            threshold={0.2}
            rootMargin="0px"
          />

          <SplitText
            text="Reviews"
            delay={30}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            // easing="easeOutCubic"
            className="lg:text-[4.5rem] text-[2.5rem] font-bold text-black mb-[1.5rem] lg:text-center text-start boska-italic"
            threshold={0.2}
            rootMargin="0px"
          />
        </div>

        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <p className="lg:w-[500px] w-full lg:text-[1.2rem] text-[1rem]">
            Here’s what my clients say about our collaboration. Their
            satisfaction and meeting expectations are my top priorities,
            ensuring the best experience possible.
          </p>
        </FadeContent>
      </div>

      <div className="lg:grid flex flex-col grid-cols-3 gap-[1rem]">
        <AnimatedContent
          distance={150}
          delay={200}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          // scale={1.1}
          threshold={0.3}
        >
          <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
            <h1 className="leading-[120%] mb-[16px] text-[25px] font-bold tracking-[-0.01em]">
              Adedayo Adeyemi
            </h1>
            <div className="leading-[150%] text-[18px]">
              We are super happy with the final result. Kareem delivered a
              beautifully designed website that perfectly reflects our brand and
              what we were looking for.
            </div>
          </article>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          delay={400}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          // scale={1.1}
          threshold={0.3}
        >
          <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
            <h1 className="leading-[120%] mb-[16px] text-[25px] font-bold tracking-[-0.01em]">
              Tobi Bello
            </h1>
            <div className="leading-[150%] text-[18px]">
              He delivered a customized solution that addressed all of our
              business needs. The website is sleek, functional, and improved our
              customer experience.
            </div>
          </article>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          delay={700}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          // scale={1.1}
          threshold={0.3}
        >
          <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
            <h1 className="leading-[120%] mb-[16px] text-[25px] font-bold tracking-[-0.01em]">
              Victor Umeh
            </h1>
            <div className="leading-[150%] text-[18px]">
              Working with Kareem was a fantastic experience! He captured
              exactly what I envisioned for my personal brand’s website and went
              above and beyond in delivering it.
            </div>
          </article>
        </AnimatedContent>

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
