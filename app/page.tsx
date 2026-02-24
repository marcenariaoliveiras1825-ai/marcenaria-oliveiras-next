import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesPreview } from "@/components/services-preview";
import { GalleryPreview } from "@/components/gallery-preview";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <GalleryPreview />
      <CTASection />
    </div>
  );
}
