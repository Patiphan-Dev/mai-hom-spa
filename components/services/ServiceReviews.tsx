import { reviews } from "@/lib/data/reviews";
import { RatingStars } from "@/components/ui/RatingStars";

export function ServiceReviews({ serviceSlug }: { serviceSlug: string }) {
  const serviceReviews = reviews.filter((review) => review.serviceSlug === serviceSlug);
  if (serviceReviews.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="font-heading text-2xl text-charcoal">รีวิวจากลูกค้าที่ใช้บริการนี้</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {serviceReviews.map((review) => (
          <div key={review.id} className="rounded-2xl border border-charcoal/10 bg-white/60 p-5">
            <RatingStars rating={review.rating} />
            <p className="mt-2 text-sm text-charcoal/80">“{review.comment}”</p>
            <p className="mt-3 text-sm font-semibold text-charcoal">{review.customerName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
