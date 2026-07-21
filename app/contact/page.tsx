import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/lib/business";
import { branches } from "@/lib/data/branches";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description: "ช่องทางติดต่อร้าน แผนที่ เวลาทำการ และข้อมูลที่จอดรถ",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading eyebrow="ติดต่อเรา" title="พร้อมให้บริการทุกวัน" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-charcoal/10 bg-white/60 p-6">
          <h2 className="font-heading text-lg text-charcoal">ช่องทางติดต่อ</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-charcoal/80">
            <li>โทรศัพท์: {business.phoneDisplay}</li>
            <li>LINE: {business.lineId}</li>
            <li>Facebook: {business.facebookUrl}</li>
            <li>Instagram: {business.instagramUrl}</li>
            <li>อีเมล: {business.email}</li>
          </ul>
        </div>

        {branches.map((branch) => (
          <div key={branch.id} className="rounded-2xl border border-charcoal/10 bg-white/60 p-6">
            <h2 className="font-heading text-lg text-charcoal">{branch.name}</h2>
            <p className="mt-2 text-sm text-charcoal/70">{branch.address}</p>
            <ul className="mt-3 flex flex-col gap-1 text-sm text-charcoal/80">
              {branch.openHours.map((slot) => (
                <li key={slot.day}>
                  {slot.day}: {slot.hours}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-charcoal/80">
              โทร {branch.phone} · {branch.hasParking ? "มีที่จอดรถ" : "ไม่มีที่จอดรถ"}
            </p>
            <a
              href={branch.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-terracotta hover:underline"
            >
              เปิดใน Google Maps →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
