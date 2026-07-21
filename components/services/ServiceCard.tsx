import Link from "next/link";
import type { Service } from "@/types";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { formatCurrency } from "@/lib/utils";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 transition-shadow hover:shadow-lg hover:shadow-charcoal/10"
    >
      <PlaceholderImage id={service.image} className="h-44 w-full rounded-none" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-lg text-charcoal group-hover:text-terracotta">
          {service.name}
        </h3>
        <p className="line-clamp-2 text-sm text-charcoal/70">{service.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between pt-3 text-sm">
          <span className="font-semibold text-terracotta">
            เริ่มต้น {formatCurrency(service.startingPrice)}
          </span>
          <span className="text-charcoal/60">
            {service.durations.map((d) => d.minutes).join(" / ")} นาที
          </span>
        </div>
      </div>
    </Link>
  );
}
