import SplitText from "../../lib/split-text";
import FadeContent from "../../lib/fade-content";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { projects } from "../../lib/data";

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

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  return (
    <>
      <button
        className={`drag-btn  ${
          hovered ? "opacity-100" : "opacity-0"
        } bg-[#2ba275] lg:block hidden satoshi font-medium cursor-grab text-white transition-opacity duration-500 ease-in-out rounded-full z-[100] w-[5rem] h-[5rem] text-[1.2rem]`}
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          pointerEvents: "none",
        }}
      >
        View
      </button>

      <div className="bg-black project text-white relative overflow-x-hidden">
        <div className="absolute left-[-18%] top[40%] right-auto bottom-auto w-[498.5px] h-[311px] z-[100]">
          <div className="absolute left-0 top-0 lg:right-auto right-[0rem] bottom-auto lg:w-[652px] w-[400px] h-[340px]">
            <img
              className="w-full h-full object-fill"
              src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241d295b23ac97b3872a90f_Green%20Oval%20Gradient%20(2).png"
              alt=""
            />
          </div>

          <div>
            <img
              className="w-full h-full object-fill"
              src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241d294ad1a5b72d3002ff7_Blue%20Oval%20Gradient%20(2).png"
              alt=""
            />
          </div>
        </div>

        <div className="py-[50px] lg:mx-[3rem] mx-[1rem]">
          <div className="w-full mb-[2rem] leading-[1.2]">
            {/* <h2 className="lg:text-[6rem] text-[3rem] font-bold"><span className="boska-italic opacity-[.7]">Selected</span> Projects</h2> */}
            <SplitText
              text="Selected"
              delay={30}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              // easing="easeOutCubic"
              className='boska-italic opacity-[.7] lg:text-[6rem] text-[3rem] font-bold"'
              threshold={0.2}
              rootMargin="0px"
            />

            <SplitText
              text="Projects"
              delay={30}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              // easing="easeOutCubic"
              className="satoshi lg:text-[6rem] text-[3rem] font-bold"
              threshold={0.2}
              rootMargin="0px"
            />
          </div>

          {/* <div className=""> */}
            <Marquee
            speed={300}
            gradient={false}
            pauseOnHover
            className="!flex gap-[3rem]"
          >
            {/* project cards */}
            {projects.map((proj, i) => (
              <FadeContent
                key={i}
                blur
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                className="lg:block hidden !w-auto"
              >
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full object-cover lg:h-[25rem] h-[18rem]" // 👈 add margin
                  onMouseMove={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full object-cover lg:h-[25rem] h-[18rem]"
                  />
                  <div className="flex flex-col">
                    <h2 className="lg:text-[2rem] text-[1.5rem] font-bold">
                      {proj.title}
                    </h2>
                    <div className="flex flex-wrap gap-[.5rem] mt-[.5rem]">
                      {proj.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className={`text-[1rem] font-bold py-[.3rem] px-[.8rem] rounded-[2rem] uppercase ${
                            idx === proj.tags.length - 1
                              ? "bg-[#2ba275] text-white"
                              : "border border-[#989696ad]"
                          }`}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </FadeContent>
            ))}
          </Marquee>
          {/* </div> */}

          <div className="projects-sm flex flex-col gap-[2rem]">
            {projects.map((proj, i) => (
              <FadeContent
                key={i}
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-[1rem] z-[10000] lg:mr-[3rem]"
                  onMouseMove={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full object-cover lg:h-[25rem] h-auto"
                    />
                    <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mt-[.5rem]">
                      <h2 className="lg:text-[2rem] text-[1.5rem] font-bold tracking-[-0.01em]">
                        {proj.title}
                      </h2>

                      <div className="flex items-center gap-[.5rem] mt-[.5rem]">
                        {proj.tags.map((tag, idx) => (
                          <div
                            key={idx}
                            className={`text-[1rem] font-bold py-[.3rem] px-[.8rem] rounded-[2rem] uppercase lg:w-auto w-max ${
                              idx === proj.tags.length - 1
                                ? "bg-[#2ba275] text-white"
                                : "border border-[#989696ad] dark:border-[#9896963b]"
                            }`}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </FadeContent>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
