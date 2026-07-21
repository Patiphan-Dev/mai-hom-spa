import { SectionHeading } from "@/components/ui/SectionHeading";

const HIGHLIGHTS = [
  { title: "นักบำบัดมืออาชีพ", detail: "ผ่านการอบรมมาตรฐาน ประสบการณ์เฉลี่ยกว่า 8 ปี" },
  { title: "ผลิตภัณฑ์คุณภาพ", detail: "น้ำมันหอมระเหยและสมุนไพรจากธรรมชาติแท้ 100%" },
  { title: "จองง่าย ไม่ต้องรอคิว", detail: "ระบบจองออนไลน์แบบเรียลไทม์ เลือกเวลาที่สะดวก" },
  { title: "บรรยากาศเป็นส่วนตัว", detail: "ห้องนวดออกแบบเพื่อความผ่อนคลายอย่างแท้จริง" },
];

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="จุดเด่นของร้าน" title="ทำไมลูกค้าถึงเลือกเรา" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((item) => (
          <div key={item.title} className="rounded-2xl border border-charcoal/10 bg-white/50 p-6">
            <h3 className="font-heading text-lg text-terracotta">{item.title}</h3>
            <p className="mt-2 text-sm text-charcoal/70">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
