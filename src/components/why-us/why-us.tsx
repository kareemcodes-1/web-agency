import FadeContent from "../../lib/fade-content"
import SplitText from "../../lib/split-text"


const WhyUs = () => {
  return (
    <section className='my-[5rem] lg:mx-[2rem] mx-[1rem] '>
          <div className='w-full lg:max-w-[580px] mb-[64px] text-center mx-auto'>
          <div>
              {/* <h2 className='lg:text-[4.5rem] text-[2.5rem] font-bold mb-[1rem]'>Why<span className='boska-italic text-black'> me?</span></h2> */}
              <SplitText
                text="Why"
                delay={30}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                className="lg:text-[4.5rem] text-[2.5rem] font-bold mb-[1rem] text-black"
                threshold={0.2}
                rootMargin="0px" />

               <SplitText
                text="me?"
                delay={30}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                // easing="easeOutCubic"
                className="lg:text-[4.5rem] text-[2.5rem] font-bold mb-[1rem] boska-italic text-black"
                threshold={0.2}
                rootMargin="0px" />
          </div>

          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <p className=' text-[1.2rem] lg:leading-[32px]'>I specializing in website development, I don’t just build websites I create digital experiences that drive real business growth. My focus is on crafting websites that not only look great but are designed to attract more leads and convert visitors into loyal customers</p>
            </FadeContent>
        </div> 

        <div className='relative w-full max-w-[1000px] mx-auto'>
              <div className='why-us-gradient absolute top-auto left-0 bottom-[-150px] w-full h-[600px]'>
                   <div className='lg:block hidden yellow-gradient absolute left-[-10%] top-0 right-auto bottom-0 w-[60%]'>
                       <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241b2d41327941b39683db0_Peach%20Gradient%20Image%20(1).png" alt="" className='w-full h-full object-contain'/>
                   </div>

                   <div className='lg:block hidden green-gradient absolute left-0 top-0 right-0 bottom-0 w-[70%] mx-auto opacity-[0.6]'>
                       <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241b2d3856d04a1b1333cd4_Green%20Gradient%20Image%20(1).png" alt="" className='w-full h-full object-contain'/>
                   </div>

                   <div className=' lg:block hidden blue-gradient absolute left-auto top-0 right-[-10%] bottom-0 w-[60%]'>
                       <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241b2d3e22f1763bfb3a480_Blue%20Gradient%20Image%20(2).png" alt="" className='w-full h-full object-contain'/>
                   </div>
              </div>

              <div className='green-vs-circle absolute left-0 lg:top-[20%] top-[0%] right-0 bottom-0 z-[1111] flex w-[72px] h-[72px] m-auto justify-center items-center rounded-full bg-[#2ba275] text-white text-[32px] leading-[40px] font-bold tracking-[-0.01em] uppercase'>
                  vs
              </div>

              <div className='relative w-full grid-idk !gap-[5rem]'>
                  <div className='relative'>
                      <h1 className="text-[2rem] font-bold nav-logo text-center">bykareem<sup>©</sup></h1>

                       <div className='why-us-feature-wrapper'>
                            <div className='mb-[32px] lg:text-[1.1rem] text-[.925rem] leading-[24px] font-bold tracking-[0.12em] uppercase'>
                                Features included :
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>Proven Expertise</div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>Budget-Friendly Brilliance</div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>Responsive Excellence </div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>Client-Centric Dedication</div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>Fast Project Delivery</div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>AI Agent For Lead Generation  </div>
                            </div>
                       </div>
                  </div>

                  <div className='relative'>
                      <h1 className="lg:text-[2rem] text-[1.5rem] font-bold text-center">Other Web Designers</h1>
                       <div className='why-us-feature-wrapper'>
                            <div className='mb-[32px] lg:text-[1.1rem] text-[.925rem] leading-[24px] font-bold tracking-[0.12em] uppercase'>
                                Features not included :
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4e07a1868188d4408d2_XCircle.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>Less years of experience</div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4e07a1868188d4408d2_XCircle.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>No hidden fees or add-on costs</div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4e07a1868188d4408d2_XCircle.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>Nonresponsive Design</div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4e07a1868188d4408d2_XCircle.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>Self-Centered Approach</div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4e07a1868188d4408d2_XCircle.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>Overpromising and underdelivering</div>
                            </div>

                            <div className='flex mb-[16px] justify-start items-start'>
                                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4e07a1868188d4408d2_XCircle.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
                                <div className='lg:text-[20px] text-[18px] leading-[32px] font-medium'>No AI integration</div>
                            </div>
                       </div>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default WhyUs