import type { Metadata } from "next";
import { promotions } from "@/lib/data/promotions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { formatThaiDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "โปรโมชั่น",
  description: "ส่วนลด แพ็กเกจ สิทธิพิเศษสมาชิก และ Gift Voucher ของร้าน",
};

export default function PromotionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="โปรโมชั่น" title="ข้อเสนอพิเศษทั้งหมด" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {promotions.map((promo) => (
          <div key={promo.slug} className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60">
            <PlaceholderImage id={promo.image} caption={promo.discountLabel} className="h-36 w-full rounded-none" />
            <div className="p-6">
              <h2 className="font-heading text-lg text-charcoal">{promo.title}</h2>
              <p className="mt-2 text-sm text-charcoal/70">{promo.description}</p>
              <ul className="mt-3 flex flex-col gap-1 text-xs text-charcoal/50">
                {promo.terms.map((term) => (
                  <li key={term}>• {term}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-charcoal/50">ใช้ได้ถึง {formatThaiDate(promo.validUntil)}</p>
              <Button href="/booking" className="mt-4 w-full justify-center">
                จองเลย
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
