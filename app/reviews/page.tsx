import type { Metadata } from "next";
import { reviews } from "@/lib/data/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RatingStars } from "@/components/ui/RatingStars";
import { formatThaiDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "รีวิวลูกค้า",
  description: "รวมรีวิวและคะแนนจากลูกค้าที่ใช้บริการจริง",
};

export default function ReviewsPage() {
  const average = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading eyebrow="รีวิวลูกค้า" title={`คะแนนเฉลี่ย ${average} จาก 5`} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-2xl border border-charcoal/10 bg-white/60 p-6">
            <div className="flex items-center justify-between">
              <RatingStars rating={review.rating} />
              <span className="text-xs text-charcoal/40">{formatThaiDate(review.date)}</span>
            </div>
            <p className="mt-3 text-sm text-charcoal/80">“{review.comment}”</p>
            <p className="mt-4 text-sm font-semibold text-charcoal">{review.customerName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
