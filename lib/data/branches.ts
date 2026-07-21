import type { Branch } from "@/types";

export const branches: Branch[] = [
  {
    id: "thonglor",
    name: "สาขาทองหล่อ",
    address: "123/45 ซอยทองหล่อ 10 ถนนสุขุมวิท 55 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110 (ตัวอย่าง)",
    mapUrl: "https://maps.google.com/?q=Thonglor+Bangkok",
    phone: "02-123-4567",
    hasParking: true,
    openHours: [
      { day: "จันทร์ - ศุกร์", hours: "10:00 - 22:00" },
      { day: "เสาร์ - อาทิตย์", hours: "09:00 - 22:00" },
    ],
  },
  {
    id: "ari",
    name: "สาขาอารีย์",
    address: "88 ซอยอารีย์สัมพันธ์ 3 ถนนพหลโยธิน แขวงสามเสนใน เขตพญาไท กรุงเทพฯ 10400 (ตัวอย่าง)",
    mapUrl: "https://maps.google.com/?q=Ari+Bangkok",
    phone: "02-234-5678",
    hasParking: true,
    openHours: [
      { day: "จันทร์ - ศุกร์", hours: "10:00 - 21:00" },
      { day: "เสาร์ - อาทิตย์", hours: "09:00 - 21:00" },
    ],
  },
];
