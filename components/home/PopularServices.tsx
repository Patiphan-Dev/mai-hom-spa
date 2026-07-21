import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function PopularServices() {
  const popular = services.filter((service) => service.popular);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="บริการยอดนิยม" title="บริการที่ลูกค้าเลือกมากที่สุด" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {popular.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/services" variant="outline">
          ดูบริการทั้งหมด
        </Button>
      </div>
    </section>
  );
}
