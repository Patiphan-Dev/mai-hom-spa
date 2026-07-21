export function TimeSlotPicker({
  slots,
  selected,
  onSelect,
}: {
  slots: string[];
  selected: string;
  onSelect: (time: string) => void;
}) {
  if (slots.length === 0) {
    return <p className="text-sm text-charcoal/50">กรุณาเลือกวันที่และสาขาก่อน เพื่อดูช่วงเวลาว่าง</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {slots.map((time) => (
        <button
          key={time}
          type="button"
          onClick={() => onSelect(time)}
          className={`rounded-full px-4 py-2 text-sm transition-colors ${
            selected === time
              ? "bg-terracotta text-cream"
              : "border border-charcoal/20 text-charcoal/70 hover:border-terracotta"
          }`}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
