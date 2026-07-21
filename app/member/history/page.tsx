import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingHistoryTable } from "@/components/member/BookingHistoryTable";

export const metadata: Metadata = {
  title: "ประวัติการจอง",
  description: "ดูประวัติการจองคิวและจัดการนัดหมายของคุณ",
};

export default function BookingHistoryPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading align="left" eyebrow="สมาชิก" title="ประวัติการจอง" />
      <div className="mt-10">
        <BookingHistoryTable />
      </div>
    </div>
  );
}
