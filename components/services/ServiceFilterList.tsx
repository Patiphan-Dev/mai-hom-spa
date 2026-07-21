"use client";

import { useState } from "react";
import type { Service, ServiceCategory } from "@/types";
import { ServiceCard } from "@/components/services/ServiceCard";

const CATEGORY_LABELS: Record<"all" | ServiceCategory, string> = {
  all: "ทั้งหมด",
  massage: "นวด",
  spa: "สปา",
  treatment: "ทรีตเมนต์",
  package: "แพ็กเกจ",
};

export function ServiceFilterList({ services }: { services: Service[] }) {
  const [category, setCategory] = useState<"all" | ServiceCategory>("all");

  const filtered =
    category === "all" ? services : services.filter((service) => service.category === category);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {(Object.keys(CATEGORY_LABELS) as Array<"all" | ServiceCategory>).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setCategory(key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === key
                ? "bg-terracotta text-cream"
                : "border border-charcoal/20 text-charcoal/70 hover:border-terracotta"
            }`}
          >
            {CATEGORY_LABELS[key]}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
