import { demoMember } from "@/lib/data/member";
import { formatThaiDate } from "@/lib/utils";

export function MemberProfileCard() {
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white/60 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-xl text-charcoal">{demoMember.name}</h2>
          <p className="text-sm text-charcoal/60">{demoMember.email}</p>
        </div>
        <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
          {demoMember.tier}
        </span>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-charcoal/50">เบอร์โทร</dt>
          <dd className="font-medium">{demoMember.phone}</dd>
        </div>
        <div>
          <dt className="text-charcoal/50">สมาชิกตั้งแต่</dt>
          <dd className="font-medium">{formatThaiDate(demoMember.memberSince)}</dd>
        </div>
        <div>
          <dt className="text-charcoal/50">คะแนนสะสม</dt>
          <dd className="font-semibold text-terracotta">{demoMember.points.toLocaleString()} แต้ม</dd>
        </div>
      </dl>

      <button
        type="button"
        className="mt-5 rounded-full border border-charcoal/20 px-5 py-2 text-sm font-medium text-charcoal/80 hover:border-terracotta"
      >
        แก้ไขข้อมูลส่วนตัว
      </button>
      <p className="mt-2 text-xs text-charcoal/40">
        * หน้าจำลองสำหรับสาธิต ยังไม่เชื่อมต่อระบบสมาชิกจริง
      </p>
    </div>
  );
}
