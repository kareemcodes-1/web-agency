import FadeContent from "../../lib/fade-content";
import SplitText from "../../lib/split-text";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const ref = useRef<HTMLImageElement | null>(null);
  
    useEffect(() => {
      if(ref){
        gsap.fromTo(
          ref.current,
          { scale: 1.3 },// Start state
          {
            scale: 1,
            duration: 1,
            delay: 0.54,
            ease: "easeInOut",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          }
        );

        gsap.fromTo(
          ".burst",
          { scale: 0 },// Start state
          {
            scale: 1,
            duration: 1,
            delay: 0.64,
            ease: "easeInOut",
            scrollTrigger: {
              trigger: ".burst",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          }
        );
      }

      
    }, [ref]);

  return (
    <div className="about lg:mx-[3rem] mx-[1rem] lg:pt-[2rem] pt-[5rem] lg:pb-[7rem] pb-[7rem] ">
      <div className="lg:grid flex flex-col grid-cols-2 gap-[2rem]">
        <div className="relative">
        <div className="overflow-hidden">
        <img
          src="/about.jpeg"
          alt=""
          className="lg:h-[40rem] h-[30rem] w-full object-cover rounded-md"
          ref={ref}
        />
        </div>

        <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/62541da38c93a25ba4b4b6e2_Burst-pucker-1.svg" alt="" className="burst absolute top-[2rem] w-[7rem] h-[7rem] right-[2rem]"/>
        </div>

        <div>
          {/* <h2 className="lg:text-[4.5rem] text-[2rem] font-bold text-black mb-[1.5rem]">
          Building Stronger <span className="boska-italic"> Brands, Driving Results!</span>
          </h2> */}

          
         <div className="leading-[1.3]">
         <SplitText 
                text="Building Stronger"
                delay={30}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="0px" className="lg:text-[4.5rem] text-[2rem] font-bold text-black mb-[1.5rem]" />
          
          <SplitText 
                text="Brands, Driving Results!"
                delay={30}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="0px" className="boska-italic lg:text-[4.5rem] text-[2rem] font-bold text-black mb-[1.5rem]" />
         </div>

         <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <p className="lg:text-[1.2rem] text-[1rem]">
            I specialize in transforming ideas into high-performing websites that are both visually engaging and strategically built to drive business growth. From concept to launch, I ensure every project delivers a seamless user experience, strong functionality, and measurable impact.
          </p>
          </FadeContent>

          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="flex flex-col gap-[.5rem] mt-[1.5rem]">
              <div>
              <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
              <span>Web Design Specialist</span>
              </div>

              <div>
              <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
              <span>Proven Track Record of Driving Online Growth</span>
              </div>

              <a href='https://wa.link/4szetj' 
           target='_blank' 
            className='!lg:flex items-center !w-[15rem] gap-[.5rem] button mt-[2rem] hover:bg-[#caef45] hover:text-black z-[100] group transition'
          >
              {/* Yes, I Need More Leads! */}
               Reach Me
           <ArrowUpRight className='w-[2rem] h-[2rem] transition-transform transform group-hover:rotate-[43deg]' />
        </a>
          </div>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default About;
