import { Hero } from "@/components/home/Hero";
import { PopularServices } from "@/components/home/PopularServices";
import { Packages } from "@/components/home/Packages";
import { Highlights } from "@/components/home/Highlights";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { PromotionsSection } from "@/components/home/PromotionsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { MapSection } from "@/components/home/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularServices />
      <Packages />
      <Highlights />
      <ReviewsSection />
      <TherapistsSection />
      <PromotionsSection />
      <GallerySection />
      <MapSection />
    </>
  );
}
