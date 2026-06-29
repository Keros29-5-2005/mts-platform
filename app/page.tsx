import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestCollection from "@/components/LatestCollection";
import ReflectionSection from "@/components/ReflectionSection";
import WhyMts from "@/components/WhyMts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FeaturedCategories from "@/components/FeaturedCategories";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <FeaturedCategories />
        
      <LatestCollection />
      <ReflectionSection />
      <WhyMts />
      <Newsletter />
      <Footer />
    </>
  );
}