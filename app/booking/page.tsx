import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "จองคิว",
  description: "จองคิวนวดและสปาออนไลน์ เลือกวันเวลา สาขา และนักบำบัดที่คุณต้องการ",
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="จองคิวออนไลน์" title="เลือกวันเวลาที่สะดวก" />
      <div className="mt-10">
        <BookingForm defaultServiceSlug={service} />
      </div>
    </div>
  );
}
