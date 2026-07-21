import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MemberProfileCard } from "@/components/member/MemberProfileCard";
import { MemberCoupons } from "@/components/member/MemberCoupons";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "สมาชิก",
  description: "หน้าสมาชิก ดูคะแนนสะสม คูปอง และประวัติการจอง",
};

export default function MemberPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <SectionHeading align="left" eyebrow="สมาชิก" title="บัญชีของฉัน" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <MemberProfileCard />
        <MemberCoupons />
      </div>

      <div className="mt-6 flex gap-3">
        <Button href="/member/history" variant="outline">
          ดูประวัติการจอง
        </Button>
        <Button href="/booking">จองคิวใหม่</Button>
      </div>
    </div>
  );
}
