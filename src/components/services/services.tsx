

const Services = () => {
  return (
    <div className='mx-[2rem] mb-[7rem] relative'>
        <div className='top-[220px] absolute left-0 right-0 bottom-0 w-full h-[642px] max-w-[1005px] mx-auto'>
            <div className='yellow-gradient absolute left-auto top-0 right-0 bottom-auto w-[70%] opacity-[0.7] z-[-1]'>
                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241b2d41327941b39683db0_Peach%20Gradient%20Image%20(1).png" alt="" className='w-full h-full object-fill'/>
            </div>

            <div className='blue-gradient absolute left-0 top-auto right-auto -bottom-[100px] w-[70%] opacity-[0.5] z-[-1]'>
                <img src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241b2d3e22f1763bfb3a480_Blue%20Gradient%20Image%20(2).png" alt="" className='w-full h-full object-fill'/>
            </div>
        </div>
        <h1 className='lg:text-[5rem] text-[2.5rem] mb-[1.5rem] text-black font-bold text-center'>What we <span className='boska-italic'>offer</span></h1>
        <div className='lg:grid flex flex-col grid-cols-2 gap-[1rem] z-[1000]'>
            <article className='bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow'>
                   <img src="https://cdn-icons-png.flaticon.com/128/2186/2186383.png" alt="" className='w-[100px] h-[100px] mb-[32px] object-cover'/>
                   <h1 className='leading-[120%] mb-[16px] text-[32px] font-bold tracking-[-0.01em]'>Website development</h1>
                   <div className='leading-[150%] text-[18px]'>
                   Automate recurring invoices and save time by using pre-built templates. Get paid on time.
                   </div>
            </article>
            <article className='bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow'>
                   <img src="https://cdn-icons-png.flaticon.com/128/2186/2186076.png" alt="" className='w-[100px] h-[100px] mb-[32px] object-cover'/>
                   <h1 className='leading-[120%] mb-[16px] text-[32px] font-bold tracking-[-0.01em]'>Unique Design</h1>
                   <div className='leading-[150%] text-[18px]'>
                   Automate recurring invoices and save time by using pre-built templates. Get paid on time.
                   </div>
            </article>

            <article className='bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow'>
                   <img src="https://cdn-icons-png.flaticon.com/128/6564/6564647.png" alt="" className='w-[100px] h-[100px] mb-[32px] object-cover'/>
                   <h1 className='leading-[120%] mb-[16px] text-[32px] font-bold tracking-[-0.01em]'>SEO</h1>
                   <div className='leading-[150%] text-[18px]'>
                   Automate recurring invoices and save time by using pre-built templates. Get paid on time.
                   </div>
            </article>

            <article className='bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow'>
                   <img src="https://cdn-icons-png.flaticon.com/128/10107/10107063.png" alt="" className='w-[100px] h-[100px] mb-[32px] object-cover'/>
                   <h1 className='leading-[120%] mb-[16px] text-[32px] font-bold tracking-[-0.01em]'>Automations</h1>
                   <div className='leading-[150%] text-[18px]'>
                   Automate recurring invoices and save time by using pre-built templates. Get paid on time.
                   </div>
            </article>
        </div>
    </div>
  )
}

export default Services