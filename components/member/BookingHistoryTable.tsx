"use client";

import { useState } from "react";
import { demoBookingHistory } from "@/lib/data/member";
import { formatThaiDate } from "@/lib/utils";

export function BookingHistoryTable() {
  const [notice, setNotice] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {notice ? (
        <p className="rounded-xl bg-moss/10 px-4 py-3 text-sm text-moss-dark">{notice}</p>
      ) : null}

      <div className="overflow-x-auto rounded-2xl border border-charcoal/10 bg-white/60">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-cream-deep/60 text-charcoal/60">
            <tr>
              <th className="px-4 py-3">เลขที่การจอง</th>
              <th className="px-4 py-3">บริการ</th>
              <th className="px-4 py-3">วันที่ / เวลา</th>
              <th className="px-4 py-3">สาขา</th>
              <th className="px-4 py-3">สถานะ</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {demoBookingHistory.map((booking) => (
              <tr key={booking.reference} className="border-t border-charcoal/10">
                <td className="px-4 py-3 font-medium">{booking.reference}</td>
                <td className="px-4 py-3">{booking.serviceName}</td>
                <td className="px-4 py-3">
                  {formatThaiDate(booking.date)} · {booking.time}
                </td>
                <td className="px-4 py-3">{booking.branchName}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      booking.status === "เสร็จสิ้น"
                        ? "bg-moss/15 text-moss-dark"
                        : "bg-gold/20 text-gold"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {booking.status === "รอเข้ารับบริการ" ? (
                    <button
                      type="button"
                      onClick={() =>
                        setNotice(`ส่งคำขอเลื่อน/ยกเลิกนัด ${booking.reference} แล้ว เจ้าหน้าที่จะติดต่อกลับทาง LINE`)
                      }
                      className="text-xs font-semibold text-terracotta hover:underline"
                    >
                      เลื่อน/ยกเลิกนัด
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
