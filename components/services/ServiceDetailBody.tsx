import type { Service } from "@/types";
import { formatCurrency } from "@/lib/utils";

export function ServiceDetailBody({ service }: { service: Service }) {
  return (
    <div className="grid gap-10 lg:grid-cols-3">
      <div className="flex flex-col gap-8 lg:col-span-2">
        <div>
          <h2 className="font-heading text-2xl text-charcoal">รายละเอียดบริการ</h2>
          <p className="mt-3 text-charcoal/75">{service.description}</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl text-charcoal">ขั้นตอนการบริการ</h2>
          <ol className="mt-3 flex flex-col gap-2">
            {service.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm text-charcoal/75">
                <span className="font-heading text-terracotta">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="font-heading text-2xl text-charcoal">สิ่งที่คุณจะได้รับ</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2 text-sm text-charcoal/75">
                <span className="text-moss">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl text-charcoal">ข้อควรระวัง</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {service.precautions.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-charcoal/75">
                <span className="text-terracotta">!</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <aside className="h-fit rounded-2xl border border-charcoal/10 bg-white/60 p-6">
        <h3 className="font-heading text-lg text-charcoal">ระยะเวลาและราคา</h3>
        <ul className="mt-4 flex flex-col gap-2">
          {service.durations.map((duration) => (
            <li key={duration.minutes} className="flex justify-between text-sm text-charcoal/80">
              <span>{duration.minutes} นาที</span>
              <span className="font-semibold text-terracotta">{formatCurrency(duration.price)}</span>
            </li>
          ))}
        </ul>
        <a
          href={`/booking?service=${service.slug}`}
          className="mt-6 flex w-full items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream hover:bg-terracotta-dark"
        >
          จองบริการนี้
        </a>
      </aside>
    </div>
  );
}
