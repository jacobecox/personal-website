"use client";

import { useState } from "react";

const VISIBLE = 3;

export default function TechTags({ tags }: { tags: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? tags : tags.slice(0, VISIBLE);
  const hidden = tags.length - VISIBLE;

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {visible.map((t) => (
        <span
          key={t}
          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
        >
          {t}
        </span>
      ))}
      {!expanded && hidden > 0 && (
        <button
          onClick={() => setExpanded(true)}
          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted hover:text-foreground transition-colors"
        >
          +{hidden} more
        </button>
      )}
    </div>
  );
}
