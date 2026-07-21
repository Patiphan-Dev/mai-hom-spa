import { reviews } from "@/lib/data/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RatingStars } from "@/components/ui/RatingStars";
import { Button } from "@/components/ui/Button";

export function ReviewsSection() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="bg-cream-deep/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="รีวิวลูกค้า" title="เสียงจากผู้ที่มาใช้บริการ" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((review) => (
            <div key={review.id} className="rounded-2xl border border-charcoal/10 bg-white/60 p-6">
              <RatingStars rating={review.rating} />
              <p className="mt-3 text-sm text-charcoal/80">“{review.comment}”</p>
              <p className="mt-4 text-sm font-semibold text-charcoal">{review.customerName}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/reviews" variant="outline">
            ดูรีวิวทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
}
