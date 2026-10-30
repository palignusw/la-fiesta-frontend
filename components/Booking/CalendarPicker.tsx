"use client";
import { useEffect, useId, useRef, useState } from "react";
import {
  calendarDays,
  dateKey,
  formatGeorgianDate,
  georgianMonths,
  shiftDate,
} from "@/lib/calendar";
import { todayInGeorgia } from "@/lib/booking";
import Icon from "@/components/Experience/Icon";
export default function CalendarPicker({
  value,
  onChange,
  error,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}) {
  const id = useId();
  const [today, setToday] = useState("");
  const [view, setView] = useState({ year: 2026, month: 0 });
  const [mode, setMode] = useState<"days" | "months">("days");
  const [focus, setFocus] = useState("");
  const needsFocus = useRef(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const now = todayInGeorgia();
    setToday(now);
    const [year, month] = (value || now).split("-").map(Number);
    setView({ year, month: month - 1 });
    setFocus(value || now);
  }, [value]);
  useEffect(() => {
    if (needsFocus.current) {
      root.current
        ?.querySelector<HTMLButtonElement>(`[data-day="${focus}"]`)
        ?.focus();
      needsFocus.current = false;
    }
  }, [focus, view]);
  const days = calendarDays(view.year, view.month);
  const canBack =
    today &&
    (mode === "months"
      ? view.year > Number(today.slice(0, 4))
      : dateKey(view.year, view.month, 1) > today.slice(0, 7) + "-01");
  const tabDay = days.some((d) => d.key === focus && d.key >= today)
    ? focus
    : days.find((d) => d.inMonth && d.key >= today)?.key;
  function moveMonth(delta: number) {
    const d = new Date(Date.UTC(view.year, view.month + delta, 1));
    setView({ year: d.getUTCFullYear(), month: d.getUTCMonth() });
  }
  function moveFocus(key: string) {
    if (key < today) key = today;
    needsFocus.current = true;
    setFocus(key);
    const [year, month] = key.split("-").map(Number);
    setView({ year, month: month - 1 });
  }
  return (
    <div
      className={`calendar-shell ${error ? "invalid" : ""}`}
      ref={root}
      data-field="date"
      tabIndex={-1}
      role="group"
      aria-label="სასურველი თარიღი"
      aria-describedby={error ? `${id}-error` : undefined}
    >
      <div className="calendar-label">
        <span className="field-label">
          <Icon name="calendar" /> სასურველი თარიღი
        </span>
        {value && (
          <span className="date-picked">{formatGeorgianDate(value)}</span>
        )}
      </div>
      <div className="calendar-header">
        <button
          type="button"
          className="calendar-arrow"
          aria-label={mode === "days" ? "წინა თვე" : "წინა წელი"}
          disabled={disabled || !today || !canBack}
          onClick={() =>
            mode === "days"
              ? moveMonth(-1)
              : setView((v) => ({ ...v, year: v.year - 1 }))
          }
        >
          ‹
        </button>
        <button
          type="button"
          className="calendar-month"
          aria-expanded={mode === "months"}
          aria-controls={`${id}-grid`}
          disabled={disabled || !today}
          onClick={() => setMode(mode === "days" ? "months" : "days")}
        >
          {mode === "days" ? `${georgianMonths[view.month]} ` : ""}
          {view.year}
          <Icon name="chevron" />
        </button>
        <button
          type="button"
          className="calendar-arrow"
          aria-label={mode === "days" ? "შემდეგი თვე" : "შემდეგი წელი"}
          disabled={disabled || !today || view.year >= 2100}
          onClick={() =>
            mode === "days"
              ? moveMonth(1)
              : setView((v) => ({ ...v, year: v.year + 1 }))
          }
        >
          ›
        </button>
      </div>
      {mode === "months" ? (
        <div className="calendar-months" id={`${id}-grid`}>
          {georgianMonths.map((m, i) => (
            <button
              key={m}
              type="button"
              disabled={
                disabled ||
                new Date(Date.UTC(view.year, i + 1, 0))
                  .toISOString()
                  .slice(0, 10) < today
              }
              onClick={() => {
                setView((v) => ({ ...v, month: i }));
                setMode("days");
              }}
              className={i === view.month ? "selected" : ""}
            >
              {m}
            </button>
          ))}
        </div>
      ) : (
        <div id={`${id}-grid`}>
          <div className="calendar-week" aria-hidden="true">
            {["ორ", "სა", "ოთ", "ხუ", "პა", "შა", "კვ"].map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
          <div
            className="calendar-grid"
            role="group"
            aria-label={`${georgianMonths[view.month]} ${view.year}`}
          >
            {days.map((d) => (
              <button
                key={d.key}
                type="button"
                data-day={d.key}
                disabled={disabled || !today || d.key < today}
                tabIndex={d.key === tabDay ? 0 : -1}
                aria-label={formatGeorgianDate(d.key)}
                aria-pressed={value === d.key}
                aria-current={d.key === today ? "date" : undefined}
                className={`${!d.inMonth ? "outside" : ""} ${value === d.key ? "selected" : ""} ${d.key === today ? "today" : ""}`}
                onClick={() => onChange(d.key)}
                onKeyDown={(e) => {
                  let next = "";
                  if (e.key === "ArrowLeft") next = shiftDate(d.key, -1);
                  if (e.key === "ArrowRight") next = shiftDate(d.key, 1);
                  if (e.key === "ArrowUp") next = shiftDate(d.key, -7);
                  if (e.key === "ArrowDown") next = shiftDate(d.key, 7);
                  if (e.key === "Home")
                    next =
                      days[
                        Math.floor(days.findIndex((x) => x.key === d.key) / 7) *
                          7
                      ].key;
                  if (e.key === "End")
                    next =
                      days[
                        Math.floor(days.findIndex((x) => x.key === d.key) / 7) *
                          7 +
                          6
                      ].key;
                  if (e.key === "PageDown" || e.key === "PageUp") {
                    const dt = new Date(d.key + "T12:00:00Z");
                    const delta = e.key === "PageDown" ? 1 : -1;
                    const last = new Date(
                      Date.UTC(
                        dt.getUTCFullYear(),
                        dt.getUTCMonth() + delta + 1,
                        0,
                      ),
                    ).getUTCDate();
                    const nd = new Date(
                      Date.UTC(
                        dt.getUTCFullYear(),
                        dt.getUTCMonth() + delta,
                        Math.min(dt.getUTCDate(), last),
                      ),
                    );
                    next = nd.toISOString().slice(0, 10);
                  }
                  if (next) {
                    e.preventDefault();
                    moveFocus(next);
                  }
                }}
              >
                {d.day}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="calendar-foot">
        <span>
          <i /> სასურველი თარიღი
        </span>
        <span>თარიღს პირადად დაგიდასტურებთ</span>
      </div>
      {error && (
        <span className="field-error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}
