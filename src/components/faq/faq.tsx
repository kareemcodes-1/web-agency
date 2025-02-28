import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion"
  

const Faq = () => {
  return (
    <div className='lg:mx-[2rem] mx-[1rem] my-[6rem]'>
         <div className='lg:grid flex flex-col grid-cols-2 gap-[1rem]'>
         <h2 className="lg:text-[5rem] text-[2.5rem] font-bold text-black">Frequently<span className="boska-italic"> Asked Questions</span></h2>

         <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="lg:text-[1.5rem] text-[1.2rem] outline-none">Why should I get a website for my business?</AccordionTrigger>
    <AccordionContent className="lg:text-[1.2rem] text-[1rem] leading-[1.3] text-gray-700">
    A website is essential for any business to enhance credibility, reach a wider audience, and drive growth. Also by streamlining operations by automating tasks and backend systems makes it a valuable long-term asset. Even for businesses that don't rely on online sales, a website ensures potential customers can easily find information and contact you, ultimately contributing to sustained business success.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger className="lg:text-[1.5rem] text-[1.2rem] outline-none">How much does a website cost?</AccordionTrigger>
    <AccordionContent className="lg:text-[1.2rem] text-[1rem] leading-[1.3] text-gray-700">
    It is determined by the complexity of the project as well as other requirements, such as animations, custom code, and so on. Feel free to book a call with me. Once I have a thorough knowledge of your project requirements, an estimated cost and timeline for the planned work will be given.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger className="lg:text-[1.5rem] text-[1.2rem] outline-none">How long does it take to develop?</AccordionTrigger>
    <AccordionContent className="lg:text-[1.2rem] text-[1rem] leading-[1.3] text-gray-700">
    The timeline depends on the size of the project and what deliverables are needed. 
    Typically most sites can be completed anywhere from 2 - 3 weeks.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4">
    <AccordionTrigger className="lg:text-[1.5rem] text-[1.2rem]">What makes you different from other freelancers?</AccordionTrigger>
    <AccordionContent>
    We pride ourselves on offering affordable prices without compromising on quality, ensuring that exceptional websites are accessible to businesses of all sizes. Our quick turnaround times mean you won't have to wait months on end to see your vision come to life, and our personalized, custom approach ensures that each website is uniquely crafted to reflect your brand's identity and goals. 
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5">
    <AccordionTrigger className="lg:text-[1.5rem] text-[1/2rem]">Will my website be mobile-friendly?</AccordionTrigger>
    <AccordionContent className="lg:text-[1.2rem] text-[1rem] leading-[1.3] text-gray-700">
    Absolutely! We ensure all websites are responsive and look great on all devices, including desktop, tablet, and mobile.
    </AccordionContent>
  </AccordionItem>
</Accordion>


         </div>
    </div>
  )
}

export default Faq