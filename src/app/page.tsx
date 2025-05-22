import { Metadata } from "next";
import About from "./_components/about";
import AgricultureSuit from "./_components/agriculture-suit";
/**import BrandLogos from "./_components/brand-logos"; */
import ConsultingCards from "./_components/consulting-cards";
import CraftedERP from "./_components/crafted-erp";
import Hero from "./_components/hero";
/**import IconCards from "./_components/icon-cards";*/
/**import Testimonial from "./_components/testimonial";*/


export const metadata: Metadata = {
  title: 'Cloudsuite Flemingo Services ',
  description: 'At Cloudsuite Flemingo Services, we specialize in delivering tailored NetSuite ERP solutions to streamline your business processes and boost your productivity.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ConsultingCards />
      <CraftedERP />
      <AgricultureSuit />
      <About />
      
    </>
  );
}
