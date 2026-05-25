import BestSeller from "@/components/BestSeller";
import Contact from "@/components/Contact";
import CustomerReview from "@/components/CustomerReview";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import OurPortfolio from "@/components/OurPortfolio";
import OurProcess from "@/components/OurProcess";
import OurProducts from "@/components/Ourproducts";
import VlogsSection from "@/components/Vlogs";
import WhyChooseUs from "@/components/WhyChooseus";


export default function Home() {
  return (
    <div className="min-h-[300vh] overflow-hidden">
      <main className="relative">
      <div className="absolute inset-0 opacity-[0.07]" />
        
        <Hero />
        <BestSeller />
        <OurProducts />
        <OurPortfolio />
        {/* <OurProcess /> */}
        <WhyChooseUs />
        <OurClients />
        <CustomerReview />
        <VlogsSection />
        <Contact />
      </main>
    </div>
  );
}
