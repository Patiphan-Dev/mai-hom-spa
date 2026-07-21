import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceFilterList } from "@/components/services/ServiceFilterList";

export const metadata: Metadata = {
  title: "บริการทั้งหมด",
  description: "รวมบริการนวด สปา ทรีตเมนต์ และแพ็กเกจทั้งหมดของร้าน พร้อมราคาและระยะเวลา",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="บริการของเรา" title="เลือกบริการที่ใช่สำหรับคุณ" />
      <div className="mt-10">
        <ServiceFilterList services={services} />
      </div>
    </div>
  );
}
