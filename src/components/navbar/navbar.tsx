

const Navbar = () => {

  const handleScrollDown = (section: string) => {
      document.querySelector(section)?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <header className="lg:block hidden w-full px-[1.5rem] py-[1rem] ">

    <nav className="flex items-center justify-between">
      <a className="" href="/">
        <h1 className="text-[1.5rem] font-bold nav-logo">bykareem<sup>©</sup></h1>
      </a>

      
      <ul className="lg:flex hidden items-center gap-[2rem] text-black">
            <a
              onClick={() => handleScrollDown('.about')}
              className="text-[1.1rem] hover:underline transition cursor-pointer"
            >
              About
            </a>

            <a
               onClick={() => handleScrollDown('.services')}
              className="text-[1.1rem] hover:underline transition cursor-pointer"
            >
              Services
            </a>

            <a
               onClick={() => handleScrollDown('.projects')}
              className="text-[1.1rem] hover:underline transition cursor-pointer"
            >
              Projects
            </a>

            <a
               onClick={() => handleScrollDown('.reviews')}
              className="text-[1.1rem] hover:underline transition cursor-pointer"
            >
             Reviews
            </a>
      </ul>


      <button type="button" className=' !hidden items-center gap-[.5rem] button lg:mt-[2rem] hover:bg-[#caef45] hover:text-black  transition z-[100] lg:!py-[.9rem] !py-[.5rem] lg:!px-[1.1rem] !px-[1rem]'>
        Get In Touch
      </button>

    </nav>
  </header>
  )
}

export default Navbar