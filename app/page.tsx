import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { Arguments } from "@/components/sections/Arguments";
import { Contact } from "@/components/sections/Contact";
import { Contrast } from "@/components/sections/Contrast";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <AmbientGlow />
      <Header />
      <main className="relative z-10 flex-1">
        <Hero />
        <Logos />
        <Contrast />
        <Process />
        <Arguments />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
