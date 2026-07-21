import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/lib/business";
import { Highlights } from "@/components/home/Highlights";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: business.description,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="เกี่ยวกับเรา" title={business.name} />
          <p className="mt-4 text-charcoal/75">{business.description}</p>
          <p className="mt-3 text-charcoal/75">
            เราเชื่อว่าการดูแลตัวเองไม่ใช่เรื่องฟุ่มเฟือย แต่เป็นสิ่งจำเป็นในชีวิตที่เร่งรีบ
            ทีมนักบำบัดของเราทุกคนผ่านการฝึกอบรมมาตรฐาน และตั้งใจดูแลลูกค้าทุกท่านราวกับคนในครอบครัว
          </p>
        </div>
        <PlaceholderImage id="warm-3" className="h-72 w-full" />
      </div>

      <div className="mt-16">
        <Highlights />
      </div>
    </div>
  );
}
