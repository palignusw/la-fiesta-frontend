"use client";
import { useEffect, useId, useRef, useState } from "react";
import Icon from "@/components/Experience/Icon";
type Option = { value: string; label: string; description?: string };
export default function CustomSelect({
  name,
  label,
  value,
  onChange,
  options,
  error,
  disabled,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  error?: string;
  disabled?: boolean;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);
  useEffect(() => {
    if (!open) return;
    list.current?.focus();
    const close = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);
  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);
  function choose(index: number) {
    onChange(options[index].value);
    setOpen(false);
    trigger.current?.focus();
  }
  function show() {
    setActive(
      Math.max(
        0,
        options.findIndex((o) => o.value === value),
      ),
    );
    setOpen(true);
  }
  return (
    <div className="custom-field" ref={root}>
      <span id={`${id}-label`} className="field-label">
        {label}
      </span>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        ref={trigger}
        className={`custom-select-trigger ${error ? "invalid" : ""}`}
        data-field={name}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-options`}
        aria-labelledby={`${id}-label ${id}-value`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            show();
          }
        }}
      >
        <span id={`${id}-value`} className={!selected ? "placeholder" : ""}>
          {selected?.label || "აირჩიეთ ღონისძიება"}
        </span>
        <Icon
          name="chevron"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
        />
      </button>
      {open && (
        <div
          id={`${id}-options`}
          ref={list}
          tabIndex={-1}
          role="listbox"
          aria-labelledby={`${id}-label`}
          aria-activedescendant={`${id}-option-${active}`}
          className="custom-options"
          onKeyDown={(e) => {
            if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
              e.preventDefault();
              setActive((i) =>
                e.key === "Home"
                  ? 0
                  : e.key === "End"
                    ? options.length - 1
                    : (i + (e.key === "ArrowDown" ? 1 : -1) + options.length) %
                      options.length,
              );
            } else if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              choose(active);
            } else if (e.key === "Escape") {
              e.preventDefault();
              setOpen(false);
              trigger.current?.focus();
            } else if (e.key === "Tab") {
              setOpen(false);
              trigger.current?.focus();
            }
          }}
        >
          {options.map((o, i) => (
            <div
              id={`${id}-option-${i}`}
              key={o.value}
              role="option"
              aria-selected={o.value === value}
              className={`custom-option ${i === active ? "highlight" : ""}`}
              onPointerMove={() => setActive(i)}
              onClick={() => choose(i)}
            >
              <span>
                {o.label}
                {o.description && <small>{o.description}</small>}
              </span>
              {o.value === value && <Icon name="check" />}
            </div>
          ))}
        </div>
      )}
      {error && (
        <span className="field-error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}
