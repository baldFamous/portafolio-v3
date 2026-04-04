import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import CoreExpertise from "@/components/CoreExpertise";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Background Gradient */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-[#fdf2f5] to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col gap-32">
        <Navbar />
        <Hero />
        <SelectedWorks />
        <CoreExpertise />
      </div>
      
      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
