import { promotions } from "@/lib/data/promotions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";

export function PromotionsSection() {
  return (
    <section className="bg-cream-deep/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="โปรโมชั่น" title="ข้อเสนอพิเศษประจำเดือนนี้" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <div
              key={promo.slug}
              className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60"
            >
              <PlaceholderImage id={promo.image} caption={promo.discountLabel} className="h-32 w-full rounded-none" />
              <div className="p-5">
                <h3 className="font-heading text-lg text-charcoal">{promo.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/promotions" variant="outline">
            ดูโปรโมชั่นทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
}
