import type { Promotion } from "@/types";

export const promotions: Promotion[] = [
  {
    slug: "new-member-30",
    title: "สมาชิกใหม่ลด 30%",
    description: "สมัครสมาชิกวันนี้ รับส่วนลดทันที 30% สำหรับการจองครั้งแรก",
    discountLabel: "-30%",
    validUntil: "2026-08-31",
    image: "warm-1",
    terms: ["ใช้ได้ 1 ครั้งต่อสมาชิกใหม่ 1 ท่าน", "ไม่สามารถใช้ร่วมกับโปรโมชั่นอื่นได้"],
  },
  {
    slug: "weekday-package",
    title: "แพ็กเกจวันธรรมดา",
    description: "จองคิววันจันทร์-พฤหัสบดี ก่อนเวลา 16:00 น. รับส่วนลด 20%",
    discountLabel: "-20%",
    validUntil: "2026-09-30",
    image: "warm-2",
    terms: ["ใช้ได้เฉพาะวันจันทร์-พฤหัสบดี", "จองล่วงหน้าอย่างน้อย 1 วัน"],
  },
  {
    slug: "gift-voucher-2000",
    title: "Gift Voucher มูลค่า 2,000 บาท",
    description: "ซื้อ Gift Voucher วันนี้ รับฟรีทรีตเมนต์ผิวหน้ามูลค่า 500 บาท",
    discountLabel: "แถมฟรี",
    validUntil: "2026-12-31",
    image: "warm-3",
    terms: ["Voucher มีอายุ 1 ปีนับจากวันที่ซื้อ", "สามารถโอนสิทธิ์ให้ผู้อื่นได้"],
  },
];
