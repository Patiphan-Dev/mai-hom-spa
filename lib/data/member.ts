export const demoMember = {
  name: "คุณสุพัตรา ใจดี",
  email: "supattra.demo@example.com",
  phone: "08x-xxx-xxxx",
  memberSince: "2025-03-14",
  points: 1250,
  tier: "Gold Member",
};

export const demoCoupons = [
  { code: "WELCOME30", label: "ส่วนลด 30% สมาชิกใหม่", expiresAt: "2026-08-31" },
  { code: "BIRTHDAY100", label: "ส่วนลด 100 บาท เดือนเกิด", expiresAt: "2026-12-31" },
];

export const demoBookingHistory = [
  {
    reference: "MH20A431",
    serviceName: "นวดน้ำมันหอมระเหย 90 นาที",
    date: "2026-07-05",
    time: "14:00",
    branchName: "สาขาทองหล่อ",
    status: "เสร็จสิ้น" as const,
  },
  {
    reference: "MH19F220",
    serviceName: "นวดแผนไทย 60 นาที",
    date: "2026-06-18",
    time: "11:00",
    branchName: "สาขาอารีย์",
    status: "เสร็จสิ้น" as const,
  },
  {
    reference: "MH21C905",
    serviceName: "แพ็กเกจ Relax Full Day",
    date: "2026-07-30",
    time: "13:00",
    branchName: "สาขาทองหล่อ",
    status: "รอเข้ารับบริการ" as const,
  },
];
