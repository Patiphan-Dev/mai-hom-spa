import Link from "next/link";
import { business } from "@/lib/business";
import { footerNav } from "@/lib/nav";
import { branches } from "@/lib/data/branches";

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-cream/70">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-cream/80 hover:text-gold">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const mainBranch = branches[0];

  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-xl font-semibold">{business.name}</p>
          <p className="mt-3 text-sm text-cream/70">{business.tagline}</p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={business.facebookUrl} className="hover:text-gold">Facebook</a>
            <a href={business.instagramUrl} className="hover:text-gold">Instagram</a>
            <a href={business.lineUrl} className="hover:text-gold">LINE</a>
          </div>
        </div>

        <FooterColumn title="เกี่ยวกับ" items={footerNav.about} />
        <FooterColumn title="บริการ" items={footerNav.services} />

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-cream/70">เวลาทำการ</h3>
          <ul className="mt-4 flex flex-col gap-1 text-sm text-cream/80">
            {mainBranch.openHours.map((slot) => (
              <li key={slot.day}>
                {slot.day}: {slot.hours}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-cream/80">โทร {business.phoneDisplay}</p>
        </div>
      </div>

      <div className="border-t border-cream/10 px-5 py-5 text-center text-xs text-cream/50">
        <p>
          © {new Date().getFullYear()} {business.name} · เว็บไซต์ตัวอย่างสำหรับการนำเสนอ ข้อมูลติดต่อและที่อยู่เป็นข้อมูลจำลอง
        </p>
        <p className="mt-1">พัฒนาเว็บไซต์โดย Patiphan Dev</p>
      </div>
    </footer>
  );
}
