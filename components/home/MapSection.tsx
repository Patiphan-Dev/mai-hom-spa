import { branches } from "@/lib/data/branches";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MapSection() {
  const mainBranch = branches[0];

  return (
    <section className="bg-cream-deep/60 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="แผนที่ & เวลาเปิด-ปิด" title={mainBranch.name} />
          <p className="mt-4 text-sm text-charcoal/70">{mainBranch.address}</p>
          <ul className="mt-4 flex flex-col gap-1 text-sm text-charcoal/80">
            {mainBranch.openHours.map((slot) => (
              <li key={slot.day}>
                {slot.day}: {slot.hours}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-charcoal/80">โทร {mainBranch.phone}</p>
          <a
            href={mainBranch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-terracotta hover:underline"
          >
            เปิดใน Google Maps →
          </a>
        </div>
        <div className="h-64 rounded-2xl border border-charcoal/10 bg-moss/10 flex items-center justify-center text-sm text-charcoal/50 lg:h-full">
          แผนที่ตัวอย่าง (Google Maps embed)
        </div>
      </div>
    </section>
  );
}
