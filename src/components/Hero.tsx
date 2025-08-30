import FadeContent from '../lib/fade-content'
// import AnimatedContent from '../lib/animated-content'
import SplitText from '../lib/split-text'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className='relative lg:h-[80vh] w-full lg:mb-0 mb-[3rem]'>
        <div>
          <div className='yellow-gradient absolute right-auto bottom-auto  lg:top-[-10rem] top-auto left-[-10rem] w-[40%] h-auto'>
          <img src="https://assets.website-files.com/623865af2eee366912508587/6241d294ad1a5b72d3002ff7_Blue%20Oval%20Gradient%20(2)-p-800.png" alt="" className="w-full h-full object-contain" />
          </div>

        <div className='lg:block hidden green-gradient absolute bottom-[-60%] lg:left-auto left-0 top-0 lg:right-[0rem] right-auto w-[40%] blur-[5rem]'>
        <img src="https://assets.website-files.com/623865af2eee366912508587/6241b2d3856d04a1b1333cd4_Green%20Gradient%20Image%20(1)-p-500.png"  alt="" className="w-full h-full object-contain"/>
        </div>

        <div className='blue-gradient absolute lg:bottom-[-44%] bottom-auto lg:w-[1000px] w-full left-0 lg:top-auto top-[-12rem] lg:right-auto right-[-4rem] lg:max-w-[1000px]'>
        <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241d294ad1a5b72d3002ff7_Blue%20Oval%20Gradient%20(2).png"  alt="" className="w-full h-full object-fill"/>
        </div>
        </div>

        <div className='flex items-center flex-col text-center lg:mt-[7rem] mt-[5.5rem] justify-center z-[111111]'>
          <div className=" relative">
          <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623d5980fbc033885da2c334_Highlight_05.svg" loading="lazy" alt='' className='lg:block hidden -top-[20px] left-[50px] right-auto bottom-auto h-auto  w-[46px] absolute '/>
          {/* <h1 className='satoshi font-bold lg:text-[5rem] text-[3rem] lg:w-[800px] w-full lg:leading-[6rem] leading-[4.5rem]  z-[111111]'>Struggling to get more <span className='boska-italic'>leads</span> for your business?</h1> */}

          <div className='lg:w-[800px] w-full lg:leading-[1.2]  leading-[1.3]'>
          <SplitText 
                text="Struggling to get more"
                delay={30}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="0px" className="satoshi font-bold lg:text-[5rem] text-[3rem] lg:w-[800px] w-full  z-[111111]" />

           

           <SplitText 
                text="leads"
                delay={30}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="0px" className="boska-italic font-bold lg:text-[5rem] text-[3rem] lg:w-[800px] w-full   z-[111111]" />

           <SplitText 
                text="for your business?"
                delay={30}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                threshold={0.2}
                rootMargin="0px" className="satoshi font-bold lg:text-[5rem] text-[3rem] lg:w-[800px] w-full   z-[111111]" />
          </div>

          </div>

          {/* <div className='overflow-hidden'> */}
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <p className='lg:w-[500px] w-full mt-[.5rem] text-[1.1rem]  z-[111111] overflow-hidden'>Look no further. We specialize in developing custom websites and systems
                        that reflect your brands identity and drive sales. </p>
            </FadeContent>
          {/* </div> */}

          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <a 
           href='https://wa.link/4szetj' 
           target='_blank'
            className='flex items-center gap-[.5rem] button mt-[2rem] hover:bg-[#caef45] hover:text-black z-[100] group transition'
          >
             Hire me now
           <ArrowUpRight className='w-[2rem] h-[2rem] transition-transform transform group-hover:rotate-[43deg]' />
        </a>
        </FadeContent>

        
       </div>

    </div>
  )
}

export default Hero