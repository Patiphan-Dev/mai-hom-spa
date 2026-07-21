const TIME_SLOTS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 1000;
  }
  return hash;
}

export function getAvailableTimeSlots(date: string, branchId: string): string[] {
  if (!date || !branchId) return [];
  const seed = hashString(`${date}-${branchId}`);
  return TIME_SLOTS.filter((_, index) => (seed + index) % 3 !== 0);
}

export function generateBookingReference(): string {
  const seed = Math.abs(hashString(`${Date.now()}`)).toString(36).toUpperCase();
  return `MH${seed.padStart(4, "0").slice(0, 6)}`;
}
