import type { Metadata } from "next";
import { galleryImages } from "@/lib/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "แกลเลอรี",
  description: "ชมบรรยากาศร้าน ห้องสปา และสิ่งอำนวยความสะดวกของเรา",
};

const CATEGORY_LABELS = {
  atmosphere: "บรรยากาศร้าน",
  room: "ห้องสปา",
  facility: "สิ่งอำนวยความสะดวก",
} as const;

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="แกลเลอรี" title="ภาพบรรยากาศร้านของเรา" />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <div key={image.id} className="flex flex-col gap-2">
            <PlaceholderImage id={image.image} className="h-40 w-full" />
            <p className="text-xs text-charcoal/50">
              {CATEGORY_LABELS[image.category]} · {image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
