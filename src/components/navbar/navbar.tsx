

const Navbar = () => {
  return (
    <header className=" w-full px-[1.5rem] py-[1rem] ">

    <nav className="flex items-center justify-between">
      <a className="" href="/">
        <img src="./logo-1.jpeg" alt="" className='lg:w-[10rem] w-[7rem] object-contain'/>
      </a>

      
      <ul className="lg:flex hidden items-center gap-[2rem] text-black">
            <a
              href={``}
              className="text-[1.1rem] hover:underline transition"
            >
              About
            </a>

            <a
              href={``}
              className="text-[1.1rem] hover:underline transition"
            >
              Services
            </a>

            <a
              href={``}
              className="text-[1.1rem] hover:underline transition"
            >
              Projects
            </a>

            <a
              href={``}
              className="text-[1.1rem] hover:underline transition"
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