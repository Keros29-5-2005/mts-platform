import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import HomeSearch from "@/components/HomeSearch";
import LatestCollection from "@/components/LatestCollection";
import ReflectionSection from "@/components/ReflectionSection";
import WhyMts from "@/components/WhyMts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedCategories />

      <HomeSearch />

      <LatestCollection />

      <ReflectionSection />

      <WhyMts />

      <Newsletter />

      <Footer />
    </>
  );
}