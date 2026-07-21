import { demoCoupons } from "@/lib/data/member";
import { formatThaiDate } from "@/lib/utils";

export function MemberCoupons() {
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white/60 p-6">
      <h2 className="font-heading text-lg text-charcoal">คูปองของฉัน</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {demoCoupons.map((coupon) => (
          <li
            key={coupon.code}
            className="flex items-center justify-between rounded-xl border border-dashed border-terracotta/40 px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-charcoal">{coupon.label}</p>
              <p className="text-xs text-charcoal/50">หมดอายุ {formatThaiDate(coupon.expiresAt)}</p>
            </div>
            <span className="font-heading text-sm text-terracotta">{coupon.code}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
