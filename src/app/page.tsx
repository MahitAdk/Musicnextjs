import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
    </div>
  );
}
