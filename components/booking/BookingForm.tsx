"use client";

import { useMemo, useState } from "react";
import { services } from "@/lib/data/services";
import { branches } from "@/lib/data/branches";
import { therapists } from "@/lib/data/therapists";
import { getAvailableTimeSlots, generateBookingReference } from "@/lib/booking";
import { TimeSlotPicker } from "@/components/booking/TimeSlotPicker";
import { BookingSuccess } from "@/components/booking/BookingSuccess";
import type { BookingFormData } from "@/types";

const inputClass =
  "w-full rounded-xl border border-charcoal/15 bg-white/70 px-4 py-3 text-sm text-charcoal focus:border-terracotta focus:outline-none";

export function BookingForm({ defaultServiceSlug }: { defaultServiceSlug?: string }) {
  const [form, setForm] = useState<BookingFormData>({
    serviceSlug: defaultServiceSlug ?? services[0].slug,
    date: "",
    time: "",
    branchId: branches[0].id,
    therapistSlug: "",
    guests: 1,
    note: "",
  });
  const [reference, setReference] = useState<string | null>(null);

  const timeSlots = useMemo(
    () => getAvailableTimeSlots(form.date, form.branchId),
    [form.date, form.branchId],
  );

  function update<K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.date || !form.time) return;
    setReference(generateBookingReference());
  }

  if (reference) {
    return <BookingSuccess reference={reference} data={form} />;
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl flex-col gap-6">
      <Field label="เลือกบริการ">
        <select
          className={inputClass}
          value={form.serviceSlug}
          onChange={(e) => update("serviceSlug", e.target.value)}
        >
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="สาขา">
          <select
            className={inputClass}
            value={form.branchId}
            onChange={(e) => update("branchId", e.target.value)}
          >
            {branches.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="วันที่">
          <input
            type="date"
            className={inputClass}
            value={form.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => update("date", e.target.value)}
          />
        </Field>
      </div>

      <Field label="เวลาที่ว่าง">
        <TimeSlotPicker slots={timeSlots} selected={form.time} onSelect={(time) => update("time", time)} />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="นักบำบัด (ถ้าต้องการเลือก)">
          <select
            className={inputClass}
            value={form.therapistSlug}
            onChange={(e) => update("therapistSlug", e.target.value)}
          >
            <option value="">ไม่ระบุ (ให้ทางร้านจัดให้)</option>
            {therapists.map((therapist) => (
              <option key={therapist.slug} value={therapist.slug}>
                {therapist.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="จำนวนผู้ใช้บริการ">
          <input
            type="number"
            min={1}
            max={6}
            className={inputClass}
            value={form.guests}
            onChange={(e) => update("guests", Number(e.target.value))}
          />
        </Field>
      </div>

      <Field label="หมายเหตุ">
        <textarea
          className={inputClass}
          rows={3}
          placeholder="เช่น แพ้น้ำมันหอมระเหยกลิ่นดอกไม้ / ต้องการห้องนวดคู่"
          value={form.note}
          onChange={(e) => update("note", e.target.value)}
        />
      </Field>

      <button
        type="submit"
        disabled={!form.date || !form.time}
        className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-40"
      >
        ยืนยันการจอง (มัดจำภายหลัง)
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-charcoal/80">
      {label}
      {children}
    </label>
  );
}
