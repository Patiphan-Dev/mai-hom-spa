import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/data/services";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ServiceDetailBody } from "@/components/services/ServiceDetailBody";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceReviews } from "@/components/services/ServiceReviews";
import { formatCurrency } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <PlaceholderImage id={service.image} className="h-64 w-full sm:h-80" />

      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl text-charcoal sm:text-4xl">{service.name}</h1>
          <p className="mt-2 max-w-xl text-charcoal/70">{service.shortDescription}</p>
        </div>
        <p className="font-heading text-2xl text-terracotta">
          เริ่มต้น {formatCurrency(service.startingPrice)}
        </p>
      </div>

      <div className="mt-10">
        <ServiceDetailBody service={service} />
      </div>

      <ServiceReviews serviceSlug={service.slug} />
      <RelatedServices services={related} />
    </div>
  );
}
