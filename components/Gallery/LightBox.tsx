"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { MediaItem } from "@/lib/content";
import s from "./LightBox.module.scss";

export default function Lightbox({
  items,
  start = 0,
  onClose,
}: {
  items: MediaItem[];
  start?: number;
  onClose: () => void;
}) {
  const safeItems = useMemo(() => items.filter((i) => !!i.src), [items]);

  const clamp = (n: number) =>
    Math.max(0, Math.min(n, Math.max(safeItems.length - 1, 0)));
  const [i, setI] = useState(() => clamp(start));

  useEffect(() => {
    setI((prev) => clamp(prev));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeItems.length]);

  const prev = useCallback(
    () =>
      setI(
        (v) =>
          (v - 1 + Math.max(safeItems.length, 1)) %
          Math.max(safeItems.length, 1),
      ),
    [safeItems.length],
  );
  const next = useCallback(
    () => setI((v) => (v + 1) % Math.max(safeItems.length, 1)),
    [safeItems.length],
  );

  const cur = safeItems[i];
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [onClose, prev, next]);

  const touchX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLButtonElement>("button")?.focus();
    const trap = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !dialog) return;
      const buttons = Array.from(
        dialog.querySelectorAll<HTMLButtonElement>("button"),
      );
      const first = buttons[0],
        last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    dialog?.addEventListener("keydown", trap);
    return () => {
      dialog?.removeEventListener("keydown", trap);
      previous?.focus();
    };
  }, []);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prev : next)();
    touchX.current = null;
  };

  if (safeItems.length === 0 || !cur?.src) return null;

  return (
    <div
      className={s.backdrop}
      ref={dialogRef}
      aria-label="ფოტოგალერეა"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={s.inner} onClick={(e) => e.stopPropagation()}>
        <button className={s.close} onClick={onClose} aria-label="დახურვა">
          ×
        </button>

        <div className={s.stage}>
          <button
            className={`${s.nav} ${s.left}`}
            onClick={prev}
            aria-label="წინა ფოტო"
          >
            ‹
          </button>
          <button
            className={`${s.nav} ${s.right}`}
            onClick={next}
            aria-label="შემდეგი ფოტო"
          >
            ›
          </button>

          {/* ВАЖНО: fill + object-fit: contain — ничего не режем */}
          <Image
            src={cur.src}
            alt={cur.alt ?? "გალერეის ფოტო"}
            fill
            sizes="(max-width: 700px) 90vw, 600px"
            className={s.fitContain}
            priority
          />
        </div>

        {cur.alt && <div className={s.caption}>{cur.alt}</div>}
      </div>
    </div>
  );
}
