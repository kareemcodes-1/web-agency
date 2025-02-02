// import { useEffect } from "react"
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"


const Projects = () => {


  return (
    <div className='bg-black text-white relative overflow-x-hidden'>
        <div className='absolute left-[-18%] top[40%] right-auto bottom-auto w-[498.5px] h-[311px] z-[100]'>
            <div className='absolute left-0 top-0 right-auto bottom-auto w-[652px] h-[340px]'>
                <img className='w-full h-full object-fill' src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241d295b23ac97b3872a90f_Green%20Oval%20Gradient%20(2).png" alt="" />
            </div>

            <div>
                <img className='w-full h-full object-fill' src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241d294ad1a5b72d3002ff7_Blue%20Oval%20Gradient%20(2).png" alt="" />
            </div>
        </div>

        <div className="py-[50px] lg:mx-[2rem] mx-[1.5rem]">
            <div className="w-full mb-[2rem]">
                <h2 className="lg:text-[6rem] text-[3rem] font-bold"><span className="boska-italic opacity-[.7]">Selected</span> Projects</h2>
            </div>

            {/* <div className="flex flex-col gap-[3rem]"> */}
            <div className="lg:grid flex flex-col grid-cols-3 gap-[1rem]">
                <article className="flex items-center justify-between gap-[1rem] z-[10000]">
                    {/* <div className="w-[30%]">
                    <h1 className="text-[15rem] boska-italic">01</h1>
                    </div> */}


                      <div className="">
                      <img src="/hyper.png" alt="" className="w-full object-contain"/>
                      <h2 className="lg:text-[2rem] text-[1.5rem]  font-bold tracking-[-0.01em]">Hyper kicks</h2>
                      <p></p>
                      </div>
                </article>

                <article className="flex items-center justify-between gap-[1rem] z-[10000]">
                    {/* <div className="w-[30%]">
                    <h1 className="text-[15rem] boska-italic">02</h1>
                    </div> */}


                      <div className="">
                      <img src="/jew.png" alt="" className="w-full object-contain"/>
                      <h2 className="lg:text-[2rem] text-[1.5rem] font-bold tracking-[-0.01em]">Chi Luxury</h2>
                      <p></p>
                      </div>
                </article>

                <article className="flex items-center justify-between gap-[1rem] z-[10000]">
                    {/* <div className="w-[30%]">
                    <h1 className="text-[15rem] boska-italic">03</h1>
                    </div> */}


                      <div className="">
                      <img src="/realty.png" alt="" className="w-full object-contain"/>
                      <h2 className="lg:text-[2rem] text-[1.5rem] font-bold tracking-[-0.01em]">Carlton Realty</h2>
                      <p></p>
                      </div>
                </article>
            </div>
        </div>
    </div>
  )
}

export default Projects