import type { Service } from "@/types";
import { ServiceCard } from "@/components/services/ServiceCard";

export function RelatedServices({ services }: { services: Service[] }) {
  if (services.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="font-heading text-2xl text-charcoal">บริการที่เกี่ยวข้อง</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
