import Marquee from "react-fast-marquee";

const CTA = () => {
  return (
    <div className='bg-black text-white rounded-[16px] py-[80px] flex flex-col items-start relative lg:mx-[2rem] mx-[1rem] mt-[3rem] overflow-x-hidden'>
        <div className='cta-gradient absolute left-auto top-[23%] right-[0%] bottom-auto z-[1111] w-[281px] h-[208px]'>
             <div className='absolute left-auto -top-[10%] -right-[10%] bottom-auto w-full'>
                  <img src="https://assets.website-files.com/623865af2eee366912508587/6241d295b23ac97b3872a90f_Green%20Oval%20Gradient%20(2)-p-500.png" alt="" className='w-full h-full object-fill'/>
             </div>

             <div className='absolute left-[-10%] top-auto right-auto bottom-[-10%] w-full'>
                  <img src="https://assets.website-files.com/623865af2eee366912508587/6241d294ad1a5b72d3002ff7_Blue%20Oval%20Gradient%20(2).png" alt="" className='w-full h-full object-fill'/>
             </div>
        </div>

        <div className='relative z-[99999] lg:px-[80px] pl-[1rem] gap-[.8rem]'>
            <h2 className='lg:text-[4rem] text-[2rem] font-bold'>Ready to get started? <br />
            <span className="boska-italic opacity-[.7]"> Let's make it happen.</span></h2>
            <p className='text-[#ffffffb3] lg:text-[1.2rem] text-[1rem]">'>Ready to take the next step? Join us now and start transforming your vision into reality with expert support.</p>
            {/* <button type="button" className='button mt-[2rem] !bg-[#caef45] !text-black z-[100]'>BOOK A CALL</button> */}
        </div>

        <Marquee className="mt-[2rem]">
            <div className="flex gap-[1rem]">
            {/* <div className='bg-[#212121] text-white text-[1.2rem]  rounded-[20rem] py-[1rem] px-[2rem]'>
                Personal gurantee
            </div> */}

            <div className='bg-[#212121] text-white text-[1.2rem]  rounded-[20rem] py-[1rem] px-[2rem]'>
                Mobile Friendly
            </div>

            <div className='bg-[#212121] text-white text-[1.2rem]  rounded-[20rem] py-[1rem] px-[2rem]'>
            E-commerce Businesses
            </div>

            <div className='bg-[#212121] text-white text-[1.2rem]  rounded-[20rem] py-[1rem] px-[2rem]'>
            Startup Businesses
            </div>

            <div className='bg-[#212121] text-white text-[1.2rem]  rounded-[20rem] py-[1rem] px-[2rem]'>
            Real Estate Agencies
            </div>

            <div className='bg-[#212121] text-white text-[1.2rem]  rounded-[20rem] py-[1rem] px-[2rem]'>
            Entreprenuers
            </div>

            <div className='bg-[#212121] text-white text-[1.2rem]  rounded-[20rem] py-[1rem] px-[2rem]'>
            Content Creators
            </div>

            {/* <div className='bg-[#212121] text-white  rounded-[20rem] p-[1rem]'>
            Cards for your whole team.
            </div>

            <div className='bg-[#212121] text-white  rounded-[20rem] p-[1rem]'>
            Cards for your whole team.
            </div> */}
            </div>
        </Marquee>
    </div>
  )
}

export default CTA