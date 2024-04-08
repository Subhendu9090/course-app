import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebnars from "@/components/UpcomingWebnars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-dot-white/[0.3]">
    <HeroSection/>
    <FeaturedSection/>
    <WhyChooseUs/>
    <TestimonialCard/>
    <UpcomingWebnars/>
    <Instructors/>
   </main> 
  );
}
