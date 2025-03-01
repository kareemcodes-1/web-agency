import SplitText from "../../lib/split-text"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect} from "react";

gsap.registerPlugin(ScrollTrigger);

const Trigger = () => {

  useEffect(() => {
    gsap.fromTo(
      ".line", // Target the image by its class name (burst)
      { width: 0 }, // Start state (hidden with 0 width)
      {
        width: "auto", // End state (full width or its natural width)
        duration: 1, // Animation duration
        delay: 0.64, // Delay before animation starts
        ease: "easeInOut", // Easing for smooth animation
        scrollTrigger: {
          trigger: ".line", // Set trigger element
          start: "top 80%", // When the top of the trigger hits 80% of the viewport
          end: "bottom 20%", // End when the bottom of the trigger hits 20% of the viewport
          toggleActions: "play none none reverse", // Action on scroll trigger
          markers: false, // Optional: Set to `true` to see scroll trigger markers
        },
      }
    );
  }, []);

  return (
    <div className='lg:text-[4rem] text-[2rem] mx-auto lg:w-[1000px] w-full satoshi font-bold text-center mb-[5rem] relative'>
       <div className='yellow-gradient absolute right-auto bottom-auto  lg:top-[-10rem] top-[-2rem] lg:left-[-10rem] left-[-2rem] w-[40%] h-auto'>
          <img src="https://assets.website-files.com/623865af2eee366912508587/6241d294ad1a5b72d3002ff7_Blue%20Oval%20Gradient%20(2)-p-800.png" alt="" className="w-full h-full object-contain" />
          </div>

        {/* <h1><span className="boska-italic">You know a website is important...</span> But it’s easy to push aside until you miss out on clients because of it</h1> */}
        <div className="leading-[1.2]">
        <SplitText 
                text="You know a website is important..."
                delay={30}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="0px" className="boska-italic" />

        <SplitText 
                text="But it’s easy to push aside until you miss out on clients because of it"
                delay={30}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="0px" />
        </div>
        <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623d5b277ae311007935fed6_Group.svg" className="line" alt="" />
    </div>
  )
}

export default Trigger