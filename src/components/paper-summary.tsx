"use client";

import { useId, useState } from "react";

export function PaperSummary({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <>
      <button
        className="tldr-toggle"
        aria-label={`TL;DR for ${title}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {open ? "▾" : "▸"} TL;DR
      </button>
      <p className="tldr-text" id={id} hidden={!open}>
        {text}
      </p>
    </>
  );
}
