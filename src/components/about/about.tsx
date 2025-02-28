import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <div className="lg:mx-[3rem] mx-[1.5rem] lg:pt-[2rem] pt-[5rem] lg:pb-[10rem] pb-[7rem]">
      <div className="lg:grid flex flex-col grid-cols-2 gap-[2rem]">
        <img
          src="/about.jpeg"
          alt=""
          className="lg:h-[40rem] h-[30rem] w-full object-cover rounded-md"
        />

        <div>
          <h2 className="lg:text-[4.5rem] text-[2.5rem] font-bold text-black mb-[1.5rem]">
          Building Stronger <span className="boska-italic"> Brands, Driving Results!</span>
          </h2>
          <p>
            With a passion for design and development, I take projects from
            ideation to launch, ensuring a seamless journey that leaves a
            lasting positive impact on the digital landscape and your business.
          </p>

          <div className="flex flex-col gap-[.5rem] mt-[1.5rem]">
              <div>
              <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
              <span>Web Design Specialist</span>
              </div>

              <div>
              <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/623cb4df9afa8cfe86eea257_CheckCircle%20Green.svg" className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px] lg:mr-[20px] mr-[15px]' alt="" />
              <span>Proven Track Record of Driving Online Growth</span>
              </div>

              <button 
           type="button" 
            className='!lg:flex items-center !w-[15rem] gap-[.5rem] button mt-[2rem] hover:bg-[#caef45] hover:text-black z-[100] group transition'
          >
              {/* Yes, I Need More Leads! */}
               Reach Me
           <ArrowUpRight className='w-[2rem] h-[2rem] transition-transform transform group-hover:rotate-[43deg]' />
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
