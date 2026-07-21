import { therapists } from "@/lib/data/therapists";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";

export function TherapistsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="แนะนำนักบำบัด" title="ทีมนักบำบัดของเรา" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {therapists.map((therapist) => (
          <div key={therapist.slug} className="flex flex-col items-center text-center">
            <PlaceholderImage id={therapist.photo} className="h-40 w-40 rounded-full" />
            <h3 className="font-heading mt-4 text-lg text-charcoal">{therapist.name}</h3>
            <p className="text-sm text-charcoal/60">{therapist.specialties.join(" · ")}</p>
            <p className="text-xs text-charcoal/50">ประสบการณ์ {therapist.yearsExperience} ปี</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/therapists" variant="outline">
          ดูนักบำบัดทั้งหมด
        </Button>
      </div>
    </section>
  );
}
