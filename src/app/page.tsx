import Image from "next/image";
import HeroSection from "@/components/hero-section/hero";
import Partner from "@/components/social-section/partner";
import AboutUs from "@/components/about-section/about-us";
import Services from "@/components/services-section/services";
import HiringSection from "@/components/hiring-section/hiring";
import SocialMedia from "@/components/social-section/social";
import Contact from "@/components/contact-section/contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <HiringSection />
      <Partner />
      <SocialMedia />
      <Contact />
    </div>
  );
}
