import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className='relative lg:h-[80vh] h-[60vh] w-full'>
        <div>
          <div className='yellow-gradient absolute right-auto bottom-auto  lg:top-0 top-auto left-0 w-[40%] h-auto'>
          <img src="https://assets.website-files.com/623865af2eee366912508587/6241d294ad1a5b72d3002ff7_Blue%20Oval%20Gradient%20(2)-p-800.png" alt="" className="w-full h-full object-contain" />
          </div>

        <div className='lg:block hidden green-gradient absolute bottom-0 lg:left-auto left-0 top-0 lg:right-0 right-auto w-[40%] blur-[5rem]'>
        <img src="https://assets.website-files.com/623865af2eee366912508587/6241b2d3856d04a1b1333cd4_Green%20Gradient%20Image%20(1)-p-500.png"  alt="" className="w-full h-full object-contain"/>
        </div>

        <div className='blue-gradient absolute lg:bottom-[-44%] bottom-auto lg:w-[1000px] w-full left-0 top-auto right-auto lg:max-w-[1000px]'>
        <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241d294ad1a5b72d3002ff7_Blue%20Oval%20Gradient%20(2).png"  alt="" className="w-full h-full object-fill"/>
        </div>
        </div>

        <div className='flex items-center flex-col text-center mt-[7rem] justify-center z-[111111]'>
        <h1 className='satoshi font-bold lg:text-[5rem] text-[3rem] lg:w-[600px] w-auto lg:leading-[6rem] leading-[4.5rem]  z-[111111]'>Need a <span className='boska-italic'>website</span> that stands out?</h1>
        <p className='lg:w-[500px] w-auto mt-[.5rem]  z-[111111]'>Look no further. Bakhtech Solutions specializes in
        creating visually striking, user-friendly websites.</p>

        <button 
           type="button" 
            className='!lg:flex items-center gap-[.5rem] button mt-[2rem] hover:bg-[#caef45] hover:text-black z-[100] group transition'
          >
             BOOK A CALL 
           <ArrowUpRight className='w-[2rem] h-[2rem] transition-transform transform group-hover:rotate-[43deg]' />
        </button>

        
       </div>

    </div>
  )
}

export default Hero