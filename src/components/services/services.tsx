const Services = () => {
  return (
    <div className="lg:mx-[3rem] mx-[1rem] mb-[7rem] relative">
      <div className="top-[220px] absolute left-0 right-0 bottom-0 w-full h-[642px] max-w-[1005px] mx-auto">
        <div className="yellow-gradient absolute left-auto top-0 right-0 bottom-auto w-[70%] opacity-[0.7] z-[-1]">
          <img
            src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241b2d41327941b39683db0_Peach%20Gradient%20Image%20(1).png"
            alt=""
            className="w-full h-full object-fill"
          />
        </div>

        <div className="blue-gradient absolute left-0 top-auto right-auto -bottom-[100px] w-[70%] opacity-[0.5] z-[-1]">
          <img
            src="https://cdn.prod.website-files.com/623865af2eee366912508587/6241b2d3e22f1763bfb3a480_Blue%20Gradient%20Image%20(2).png"
            alt=""
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      

      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mb-[3rem]">
      <h1 className="lg:text-[5rem] text-[2.5rem] mb-[1.5rem] text-black font-bold lg:text-center text-start">
        What we <span className="boska-italic">offer</span>
      </h1>

      <p className="lg:w-[500px] w-full lg:text-[1.2rem] text-[1rem]">
        Frustrated with websites that don't reflect your brand or drive growth?
        I craft premium web experiences that captivate and help you focus on
        growing your business.
      </p>
      </div>


      <div className="lg:grid flex flex-col grid-cols-2 gap-[1rem] z-[1000]">
        <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2186/2186383.png"
            alt=""
            className="w-[100px] h-[100px] mb-[32px] object-cover"
          />
          <h1 className="leading-[120%] mb-[16px] lg:text-[32px] text-[25px] font-bold tracking-[-0.01em]">
            Website development
          </h1>
          <div className="leading-[150%] text-[18px]">
          A high quality website developed to captivate and elevate your brand to new heights, gain online presence and get you more leads. Delivering seamless experiences with a focus on animation keeping your audience engaged and returning.
          </div>
        </article>
        <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2186/2186076.png"
            alt=""
            className="w-[100px] h-[100px] mb-[32px] object-cover"
          />
          <h1 className="leading-[120%] mb-[16px] lg:text-[32px] text-[25px]  font-bold tracking-[-0.01em]">
            Website Maintenance
          </h1>
          <div className="leading-[150%] text-[18px]">
          Keep your website running smoothly and securely with comprehensive maintenance services. I offer ongoing support to ensure your site remains up-to-date, fast, and functional. 
          </div>
        </article>

        <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6564/6564647.png"
            alt=""
            className="w-[100px] h-[100px] mb-[32px] object-cover"
          />
          <h1 className="leading-[120%] mb-[16px] lg:text-[32px] text-[25px]  font-bold tracking-[-0.01em]">
            SEO
          </h1>
          <div className="leading-[150%] text-[18px]">
          Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results, when potential search for your [business type] near me.
          </div>
        </article>

        <article className="bg-white py-[40px] px-[30px] w-full rounded-[22px] box-shadow">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10107/10107063.png"
            alt=""
            className="w-[100px] h-[100px] mb-[32px] object-cover"
          />
          <h1 className="leading-[120%] mb-[16px] lg:text-[32px] text-[25px]  font-bold tracking-[-0.01em]">
            Automations
          </h1>
          <div className="leading-[150%] text-[18px]">
          Unlock the full potential of your business with custom automation services. I specialize in streamlining repetitive tasks and processes, allowing you to focus on what matters most. 
          </div>
        </article>
      </div>
    </div>
  );
};

export default Services;
