import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Packages() {
  const packages = services.filter((service) => service.category === "package");

  if (packages.length === 0) return null;

  return (
    <section className="bg-cream-deep/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="แพ็กเกจแนะนำ" title="แพ็กเกจสุดคุ้ม เลือกได้ตามไลฟ์สไตล์" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
