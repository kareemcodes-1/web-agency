import { useEffect } from "react"
import Lenis from "lenis";
import Hero from "./components/Hero";
import Projects from "./components/projects/projects";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";
import Faq from "./components/faq/faq";
import CTA from "./components/cta/cta";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import WhyUs from "./components/why-us/why-us";


function App() {

  useEffect(() => {
    return () => {
      new Lenis({
        autoRaf: true,
      });
    }
  }, []);

  return (
    <>
       <svg className="pointer-events-none absolute cursor-none"><filter id="grainy"><feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence><feColorMatrix type="saturate" values="0"></feColorMatrix></filter></svg>
       <Navbar />
         <Hero />
         <Services />
         <Projects />
         <WhyUs />
         <Testimonials />
         <Faq />
         <CTA />
         <Footer />
    </>
  )

}

export default App
