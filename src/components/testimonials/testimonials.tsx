

const Testimonials = () => {
  return (
    <div className='lg:mx-[2rem] mx-[1.5rem] my-[6rem]'>
        <h2 className="lg:text-[4.5rem] text-[2.5rem] font-bold text-black mb-[1.5rem] text-center">Customer <span className="boska-italic"> Reviews</span></h2>

        <div className='lg:grid flex flex-col grid-cols-3 gap-[1rem]'>
            <article className='bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow'>
                   <img src="./people01.png" alt="" className='w-[80px] h-[80px] mb-[32px]'/>
                   <h1 className='leading-[120%] mb-[16px] text-[32px] font-bold tracking-[-0.01em]'>Sara Jones</h1>
                   <div className='leading-[150%] text-[18px]'>
                   Automate recurring invoices and save time by using pre-built templates. Get paid on time.
                   </div>
            </article>
            <article className='bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow'>
                   <img src="./people02.png" alt="" className='w-[80px] h-[80px] mb-[32px]'/>
                   <h1 className='leading-[120%] mb-[16px] text-[32px] font-bold tracking-[-0.01em]'>Unique Design</h1>
                   <div className='leading-[150%] text-[18px]'>
                   Automate recurring invoices and save time by using pre-built templates. Get paid on time.
                   </div>
            </article>

            <article className='bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow'>
                   <img src="./people03.png" alt="" className='w-[80px] h-[80px] mb-[32px]'/>
                   <h1 className='leading-[120%] mb-[16px] text-[32px] font-bold tracking-[-0.01em]'>SEO</h1>
                   <div className='leading-[150%] text-[18px]'>
                   Automate recurring invoices and save time by using pre-built templates. Get paid on time.
                   </div>
            </article>

            {/* <article className='bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow'>
                   <img src="./people01.png" alt="" className='w-[80px] h-[80px] mb-[32px]'/>
                   <h1 className='leading-[120%] mb-[16px] text-[32px] font-bold tracking-[-0.01em]'>Automations</h1>
                   <div className='leading-[150%] text-[18px]'>
                   Automate recurring invoices and save time by using pre-built templates. Get paid on time.
                   </div>
            </article> */}
        </div>
    </div>
  )
}

export default Testimonials