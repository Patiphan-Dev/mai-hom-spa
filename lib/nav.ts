export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ", href: "/services" },
  { label: "โปรโมชั่น", href: "/promotions" },
  { label: "จองคิว", href: "/booking" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export const footerNav = {
  about: [
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "นักบำบัดของเรา", href: "/therapists" },
    { label: "แกลเลอรี", href: "/gallery" },
    { label: "รีวิวลูกค้า", href: "/reviews" },
  ],
  services: [
    { label: "บริการทั้งหมด", href: "/services" },
    { label: "โปรโมชั่น", href: "/promotions" },
    { label: "จองคิวออนไลน์", href: "/booking" },
  ],
  member: [
    { label: "สมาชิก", href: "/member" },
    { label: "ประวัติการจอง", href: "/member/history" },
  ],
} satisfies Record<string, NavItem[]>;
