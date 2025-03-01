import AnimatedContent from "../../lib/animated-content";


const Navbar = () => {

  const handleScrollDown = (section: string) => {
      document.querySelector(section)?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <header className="lg:block hidden w-full px-[1.5rem] py-[1rem] ">

    <nav className="flex items-center justify-between">
    <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
      <a className="" href="/">
        <h1 className="text-[1.5rem] font-bold nav-logo">bykareem<sup>©</sup></h1>
      </a>
      </AnimatedContent>

      
      <ul className="lg:flex hidden items-center gap-[2rem] text-black">
      <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <a
              onClick={() => handleScrollDown('.about')}
              className="text-[1.1rem] hover:underline transition cursor-pointer"
            >
              About
            </a>
            </AnimatedContent>

        <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <a
               onClick={() => handleScrollDown('.services')}
              className="text-[1.1rem] hover:underline transition cursor-pointer"
            >
              Services
            </a>
          </AnimatedContent>

          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <a
               onClick={() => handleScrollDown('.projects')}
              className="text-[1.1rem] hover:underline transition cursor-pointer"
            >
              Projects
            </a>
          </AnimatedContent>

          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <a
               onClick={() => handleScrollDown('.reviews')}
              className="text-[1.1rem] hover:underline transition cursor-pointer"
            >
             Reviews
            </a>
            </AnimatedContent>
      </ul>


    </nav>
  </header>
  )
}

export default Navbar