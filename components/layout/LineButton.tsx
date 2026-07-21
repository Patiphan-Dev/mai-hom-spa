import { business } from "@/lib/business";

export function LineButton() {
  return (
    <a
      href={business.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] text-cream shadow-lg shadow-charcoal/20 transition-transform hover:scale-105"
      aria-label="แชทผ่าน LINE"
    >
      <span className="font-heading text-lg font-semibold">LINE</span>
    </a>
  );
}
