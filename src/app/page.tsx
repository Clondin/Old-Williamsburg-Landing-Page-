import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Catalog from "@/components/Catalog";
import Quote from "@/components/Quote";
import Distributor from "@/components/Distributor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Story />
      <Catalog />
      <Quote />
      <Distributor />
      <Footer />
    </>
  );
}
