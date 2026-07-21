import { galleryImages } from "@/lib/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";

export function GallerySection() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="แกลเลอรี" title="บรรยากาศภายในร้าน" />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {preview.map((image) => (
          <PlaceholderImage key={image.id} id={image.image} className="h-40 w-full" />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/gallery" variant="outline">
          ดูแกลเลอรีทั้งหมด
        </Button>
      </div>
    </section>
  );
}
