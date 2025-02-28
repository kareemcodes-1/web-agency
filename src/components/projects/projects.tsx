import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Projects = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX - 56, // Half of the button's width
        y: event.clientY - 20, // Half of the button's height
      });
    };
    

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseOver(){
      setHovered(true);
  }

  function handleMouseLeave(){
    setHovered(false);
  }


  return (

    <>
    <button
    className={`drag-btn  ${hovered ? 'opacity-100' : 'opacity-0'} bg-[#2ba275] satoshi font-medium cursor-grab text-white transition-opacity duration-500 ease-in-out rounded-full z-[100] w-[5rem] h-[5rem] text-[1.2rem]`}
   style={{
     position: "fixed",
     left: position.x,
     top: position.y,
     pointerEvents: "none",
   }}

   >
     View
   </button>
   
    <div className='bg-black text-white relative overflow-x-hidden'>
        <div className='absolute left-[-18%] top[40%] right-auto bottom-auto w-[498.5px] h-[311px] z-[100]'>
            <div className='absolute left-0 top-0 right-auto bottom-auto w-[652px] h-[340px]'>
                <img className='w-full h-full object-fill' src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241d295b23ac97b3872a90f_Green%20Oval%20Gradient%20(2).png" alt="" />
            </div>

            <div>
                <img className='w-full h-full object-fill' src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241d294ad1a5b72d3002ff7_Blue%20Oval%20Gradient%20(2).png" alt="" />
            </div>
        </div>

        <div className="py-[50px] lg:mx-[3rem] mx-[1rem]">
            <div className="w-full mb-[2rem]">
                <h2 className="lg:text-[6rem] text-[3rem] font-bold"><span className="boska-italic opacity-[.7]">Selected</span> Projects</h2>
            </div>

            {/* Marquee for fast scrolling project cards */}
            <Marquee speed={60} gradient={false} className="flex gap-[2rem]" >
                <a href='https://hyperkicks.vercel.app' target='_blank' className="flex items-center justify-between gap-[1rem] z-[10000] mr-[3rem]" onMouseMove={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <div className="">
                      <img src="/hyper.png" alt="" className="w-full lg:object-cover object-contain lg:h-[25rem] h-[18rem]"/>
                      <div className='flex items-center justify-between'>
                      <h2 className="lg:text-[2rem] text-[1.5rem] font-bold tracking-[-0.01em]">Hyper Kicks</h2>

                      <div className='flex items-center gap-[.5rem] mt-[.5rem]'>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>E-commerce</div>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>Sneaker</div>
                      <div className={"text-[1rem] font-bold bg-[#2ba275] text-white py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>2024</div>
                      </div>
                      </div>
                    </div>
                </a>

                <a href='https://chiluxury.vercel.app' target='_blank' className="flex items-center justify-between gap-[1rem] z-[10000] mr-[3rem]" onMouseMove={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <div className="">
                      <img src="/jew.png" alt="" className="w-full lg:object-cover object-contain lg:h-[25rem] h-[18rem]"/>
                      <div className='flex items-center justify-between'>
                      <h2 className="lg:text-[2rem] text-[1.5rem] font-bold tracking-[-0.01em]">Chi Luxury</h2>

                      <div className='flex items-center gap-[.5rem] mt-[.5rem]'>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>E-commerce</div>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>Jewellery</div>
                      <div className={"text-[1rem] font-bold bg-[#2ba275] text-white py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>2024</div>
                      </div>
                      </div>
                    </div>
                </a>

                <a href='https://carlhomes.vercel.app' target='_blank' className="flex items-center justify-between gap-[1rem] z-[10000] mr-[3rem]" onMouseMove={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <div className="">
                      <img src="/carlhomes.png" alt="" className="w-full lg:object-cover object-contain lg:h-[25rem] h-[18rem]"/>
                      <div className='flex items-center justify-between'>
                      <h2 className="lg:text-[2rem] text-[1.5rem] font-bold tracking-[-0.01em]">Carl Homes</h2>

                      <div className='flex items-center gap-[.5rem] mt-[.5rem]'>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>Real Estate</div>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>Design</div>
                      <div className={"text-[1rem] font-bold bg-[#2ba275] text-white py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>2024</div>
                      </div>
                      </div>
                    </div>
                </a>

                <a href='' target='_blank' className="flex items-center justify-between gap-[1rem] z-[10000] mr-[3rem]" onMouseMove={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <div className="">
                      <img src="/patty.png" alt="" className="w-full lg:object-cover object-contain lg:h-[25rem] h-[18rem]"/>
                      <div className='flex items-center justify-between'>
                      <h2 className="lg:text-[2rem] text-[1.5rem] font-bold tracking-[-0.01em]">Patties</h2>

                      <div className='flex items-center gap-[.5rem] mt-[.5rem]'>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>E-commerce</div>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>Burger</div>
                      <div className={"text-[1rem] font-bold bg-[#2ba275] text-white py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>2024</div>
                      </div>
                      </div>
                    </div>
                </a>

                <a href='https://bellavida-spa.vercel.app' target='_blank' className="flex items-center justify-between gap-[1rem] z-[10000] mr-[3rem]" onMouseMove={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <div className="">
                      <img src="/bellavida.png" alt="" className="w-full lg:object-cover object-contain lg:h-[25rem] h-[18rem]"/>
                      <div className='flex items-center justify-between'>
                      <h2 className="lg:text-[2rem] text-[1.5rem] font-bold tracking-[-0.01em]">Bellavida Spa</h2>

                      <div className='flex items-center gap-[.5rem] mt-[.5rem]'>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>Beauty Spa</div>
                      <div className={"text-[1rem] font-bold border border-[#989696ad] dark:border-[#9896963b] py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>Design</div>
                      <div className={"text-[1rem] font-bold bg-[#2ba275] text-white py-[.3rem] px-[.8rem] rounded-[2rem] uppercase"}>2024</div>
                      </div>
                      </div>
                    </div>
                </a>
            </Marquee>
        </div>
    </div>
    </>
  );
};

export default Projects;
