import { Button } from "@/components/ui/Button";
import type { BookingFormData } from "@/types";
import { branches } from "@/lib/data/branches";
import { getServiceBySlug } from "@/lib/data/services";
import { formatThaiDate } from "@/lib/utils";

export function BookingSuccess({
  reference,
  data,
}: {
  reference: string;
  data: BookingFormData;
}) {
  const service = getServiceBySlug(data.serviceSlug);
  const branch = branches.find((item) => item.id === data.branchId);

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-moss/30 bg-moss/5 p-8 text-center">
      <span className="font-heading text-4xl text-moss">✓</span>
      <h1 className="font-heading mt-4 text-2xl text-charcoal">จองคิวสำเร็จแล้ว</h1>
      <p className="mt-2 text-sm text-charcoal/70">
        เลขที่การจองของคุณคือ <span className="font-semibold text-terracotta">{reference}</span>
      </p>

      <dl className="mt-6 flex flex-col gap-2 text-left text-sm text-charcoal/80">
        <Row label="บริการ" value={service?.name ?? "-"} />
        <Row label="สาขา" value={branch?.name ?? "-"} />
        <Row label="วันที่" value={data.date ? formatThaiDate(data.date) : "-"} />
        <Row label="เวลา" value={data.time} />
        <Row label="จำนวนผู้ใช้บริการ" value={`${data.guests} ท่าน`} />
      </dl>

      <p className="mt-6 text-xs text-charcoal/50">
        นี่คือหน้าจำลองสำหรับสาธิตระบบจอง ยังไม่มีการตัดชำระเงินจริง เจ้าหน้าที่จะติดต่อยืนยันการจองอีกครั้งทาง LINE
      </p>

      <div className="mt-6 flex justify-center gap-3">
        <Button href="/">กลับหน้าแรก</Button>
        <Button href="/member/history" variant="outline">
          ดูประวัติการจอง
        </Button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-charcoal/10 pb-2">
      <dt className="text-charcoal/60">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
