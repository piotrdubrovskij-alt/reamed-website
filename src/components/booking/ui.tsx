"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

/** Light card on the grey page: the booking flow's unit of layout. No lines, no shadows. */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`bg-paper rounded-[28px] p-5 md:p-8 ${className}`}>{children}</section>;
}

export function CardTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-h3-m md:text-h3 font-medium tracking-[-0.015em] text-ink text-balance">
      {children}
    </h2>
  );
}

/** Pill choice, like the "Kada galime padėti?" rows: ground at rest, graphite when chosen. */
export function Choice({
  selected,
  onClick,
  children,
  className = "",
  disabled,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center min-h-[52px] px-5 rounded-full text-body font-medium transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${
        selected ? "bg-graphite text-white" : "bg-ground text-ink hover:bg-ground-hover"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export const inputClass = (error?: boolean) =>
  `w-full min-h-[52px] rounded-2xl bg-white px-4 text-body text-ink placeholder:text-graphite/60 ring-1 ring-inset ${
    error ? "ring-2 ring-[#B3261E]" : "ring-ground-hover focus:ring-2 focus:ring-focus"
  } outline-none`;

export function Field({
  label,
  error,
  hint,
  children,
  htmlFor,
}: {
  label: string;
  error?: string | null;
  hint?: string;
  children: ReactNode;
  htmlFor: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-small font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-small text-[#B3261E]">
          {error}
        </p>
      ) : hint ? (
        <p className="text-small text-graphite">{hint}</p>
      ) : null}
    </div>
  );
}

export function Notice({ kind = "info", children }: { kind?: "info" | "error" | "success"; children: ReactNode }) {
  const tone =
    kind === "error"
      ? "bg-[#F6E3E1] text-[#7A1F17]"
      : kind === "success"
        ? "bg-mint text-ink"
        : "bg-ground text-ink";
  return (
    <div role={kind === "error" ? "alert" : "status"} className={`rounded-2xl px-4 py-3 text-small ${tone}`}>
      {children}
    </div>
  );
}

export function Button({
  children,
  onClick,
  type = "button",
  disabled,
  variant = "dark",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "dark" | "ghost";
  className?: string;
}) {
  const look =
    variant === "dark"
      ? "btn btn-dark disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-graphite"
      : "inline-flex items-center justify-center min-h-[52px] px-5 rounded-full text-body font-medium text-ink bg-ground hover:bg-ground-hover disabled:opacity-40";
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${look} ${className}`}>
      {children}
    </button>
  );
}

/** Native dialog: closes on Escape and on the backdrop, returns focus to the opener. */
export function Dialog({
  title,
  onClose,
  closeLabel,
  children,
}: {
  title: string;
  onClose: () => void;
  closeLabel: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  });
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const onCancel = (e: Event) => {
      e.preventDefault();
      closeRef.current();
    };
    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, []);
  return (
    <dialog
      ref={ref}
      aria-labelledby="booking-dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto w-[calc(100%-32px)] max-w-[560px] rounded-[28px] bg-paper p-6 md:p-8 text-ink backdrop:bg-ink/50 open:flex flex-col gap-5"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id="booking-dialog-title" className="text-h3-m md:text-h3 font-medium tracking-[-0.015em] text-balance">
          {title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="shrink-0 size-11 rounded-full bg-ground hover:bg-ground-hover inline-flex items-center justify-center"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>
      {children}
    </dialog>
  );
}

export function Spinner({ label }: { label: string }) {
  return (
    <p className="flex items-center gap-3 text-small text-graphite" role="status">
      <span
        aria-hidden="true"
        className="size-5 rounded-full border-2 border-graphite/30 border-t-graphite animate-spin"
      />
      {label}
    </p>
  );
}
