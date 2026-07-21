import { Button } from "@/components/ui/Button";
import { business } from "@/lib/business";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Hero() {
  return (
    <section className="bg-organic-texture relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="font-heading w-fit rounded-full bg-moss/10 px-4 py-1.5 text-sm text-moss-dark">
            {business.nameEn}
          </span>
          <h1 className="font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
            {business.tagline}
          </h1>
          <p className="max-w-md text-base text-charcoal/70">{business.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/booking" className="text-base">
              จองเลย
            </Button>
            <Button href="/services" variant="outline" className="text-base">
              ดูบริการทั้งหมด
            </Button>
          </div>
        </div>

        <PlaceholderImage id="warm-1" className="h-72 w-full sm:h-96" />
      </div>
    </section>
  );
}
