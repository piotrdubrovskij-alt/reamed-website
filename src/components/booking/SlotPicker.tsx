"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Language } from "@/lib/translations";
import { api } from "@/lib/booking/client";
import { bookingCopy } from "@/lib/booking/copy";
import { addDays, clinicDay, clockTime, dayLabel, monthDay } from "@/lib/booking/format";
import type { Availability } from "@/lib/booking/types";
import { Button, Notice, Spinner } from "./ui";

export type Slot = { start: number; end: number };

const WEEK = 7;
const HORIZON_DAYS = 84;

/**
 * Free times for one service and specialist, a week at a time, read live from the clinic
 * system (its Google calendars plus active holds). Times are Vilnius time. Nothing here
 * books: the parent decides what to do with a picked slot.
 */
export default function SlotPicker({
  serviceId,
  specialistId,
  lang,
  selected,
  onPick,
  excludeStart,
}: {
  serviceId: string;
  specialistId: string;
  lang: Language;
  selected: Slot | null;
  onPick: (slot: Slot) => void;
  /** A time to hide, e.g. the visit's current time while rescheduling. */
  excludeStart?: number;
}) {
  const c = bookingCopy[lang];
  const [today] = useState(() => clinicDay(Date.now()));
  const [fromDay, setFromDay] = useState(today);
  const [attempt, setAttempt] = useState(0);
  const [day, setDay] = useState<string | null>(null);
  // One answer per request key; a key the answer does not match yet means "loading".
  const requestKey = `${serviceId}|${specialistId}|${fromDay}|${attempt}`;
  const [answer, setAnswer] = useState<{ key: string; data: Availability | null } | null>(null);

  useEffect(() => {
    let live = true;
    api
      .availability({ serviceId, specialistId, fromDay, toDay: addDays(fromDay, WEEK) })
      .then((result) => {
        if (live) setAnswer({ key: requestKey, data: result });
      })
      .catch(() => {
        if (live) setAnswer({ key: requestKey, data: null });
      });
    return () => {
      live = false;
    };
  }, [serviceId, specialistId, fromDay, attempt, requestKey]);

  const data = answer?.key === requestKey ? answer.data : null;
  const state: "loading" | "ready" | "error" =
    answer?.key !== requestKey ? "loading" : data?.status === "ready" ? "ready" : "error";

  const byDay = useMemo(() => {
    const map = new Map<string, Slot[]>();
    for (const slot of data?.slots ?? []) {
      if (excludeStart !== undefined && slot.start === excludeStart) continue;
      const key = clinicDay(slot.start);
      map.set(key, [...(map.get(key) ?? []), slot]);
    }
    return map;
  }, [data, excludeStart]);

  const days = useMemo(() => Array.from({ length: WEEK }, (_, i) => addDays(fromDay, i)), [fromDay]);
  const firstWithSlots = days.find((d) => byDay.has(d)) ?? null;
  const activeDay = day && byDay.has(day) ? day : firstWithSlots;

  const canPrev = fromDay > today;
  const canNext = addDays(fromDay, WEEK) <= addDays(today, HORIZON_DAYS);
  const move = (dir: -1 | 1) => {
    const next = addDays(fromDay, dir * WEEK);
    setFromDay(next < today ? today : next);
    setDay(null);
  };

  const rangeLabel = `${monthDay(days[0], lang)} – ${monthDay(days[WEEK - 1], lang)}`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => move(-1)}
          disabled={!canPrev}
          aria-label={c.prevWeek}
          className="size-11 rounded-full bg-ground hover:bg-ground-hover inline-flex items-center justify-center disabled:opacity-30"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <p className="text-small text-ink text-center">
          <span className="font-medium">{rangeLabel}</span>
          <span className="text-graphite"> · {c.clinicTime}</span>
        </p>
        <button
          type="button"
          onClick={() => move(1)}
          disabled={!canNext}
          aria-label={c.nextWeek}
          className="size-11 rounded-full bg-ground hover:bg-ground-hover inline-flex items-center justify-center disabled:opacity-30"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      {state === "loading" && <Spinner label={c.loadingSlots} />}

      {state === "error" && (
        <div className="flex flex-col gap-3">
          <Notice kind="error">{c.slotsUnavailable}</Notice>
          <Button variant="ghost" onClick={() => setAttempt((n) => n + 1)} className="self-start">
            {c.retry}
          </Button>
        </div>
      )}

      {state === "ready" && byDay.size === 0 && <Notice>{c.noSlotsWeek}</Notice>}

      {state === "ready" && byDay.size > 0 && (
        <>
          <div role="tablist" aria-label={c.time} className="grid grid-cols-7 gap-1.5">
            {days.map((d) => {
              const label = dayLabel(d, lang);
              const has = byDay.has(d);
              const active = d === activeDay;
              return (
                <button
                  key={d}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  disabled={!has}
                  onClick={() => setDay(d)}
                  className={`flex flex-col items-center justify-center gap-0.5 min-h-[56px] rounded-2xl text-small leading-tight transition-colors ${
                    active
                      ? "bg-graphite text-white"
                      : has
                        ? "bg-ground text-ink hover:bg-ground-hover"
                        : "bg-transparent text-graphite/50"
                  }`}
                >
                  <span className="capitalize">{label.weekday}</span>
                  <span className="font-medium tabular-nums">{label.day}</span>
                </button>
              );
            })}
          </div>
          {activeDay && (
            <ul role="tabpanel" className="flex flex-wrap gap-2">
              {(byDay.get(activeDay) ?? []).map((slot) => {
                const chosen = selected?.start === slot.start;
                return (
                  <li key={slot.start}>
                    <button
                      type="button"
                      aria-pressed={chosen}
                      onClick={() => onPick(slot)}
                      className={`min-h-11 min-w-[84px] px-4 rounded-full text-body font-medium tabular-nums transition-colors ${
                        chosen ? "bg-graphite text-white" : "bg-white text-ink ring-1 ring-inset ring-ground-hover hover:bg-ground"
                      }`}
                    >
                      {clockTime(slot.start, lang)}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
