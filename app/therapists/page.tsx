import type { Metadata } from "next";
import { therapists } from "@/lib/data/therapists";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "นักบำบัดของเรา",
  description: "ทำความรู้จักนักบำบัดมืออาชีพ ประสบการณ์ ความเชี่ยวชาญ และภาษาที่สื่อสารได้",
};

export default function TherapistsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="ทีมงานของเรา" title="นักบำบัดมืออาชีพ" />

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {therapists.map((therapist) => (
          <div key={therapist.slug} className="flex flex-col items-center text-center">
            <PlaceholderImage id={therapist.photo} className="h-40 w-40 rounded-full" />
            <h2 className="font-heading mt-4 text-lg text-charcoal">{therapist.name}</h2>
            <p className="mt-1 text-sm text-charcoal/70">{therapist.specialties.join(" · ")}</p>
            <p className="mt-2 text-sm text-charcoal/60">{therapist.bio}</p>
            <p className="mt-2 text-xs text-charcoal/50">ภาษา: {therapist.languages.join(", ")}</p>
            <p className="text-xs text-charcoal/50">ตารางงาน: {therapist.schedule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
