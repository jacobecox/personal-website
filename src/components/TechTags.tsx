"use client";

const VISIBLE = 3;

export default function TechTags({ tags }: { tags: string[] }) {
  const hidden = tags.slice(VISIBLE);

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {tags.slice(0, VISIBLE).map((t) => (
        <span
          key={t}
          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
        >
          {t}
        </span>
      ))}
      {hidden.length > 0 && (
        <span className="relative group/tooltip">
          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted cursor-default">
            +{hidden.length} more
          </span>
          <div className="pointer-events-none absolute bottom-full left-0 mb-2 z-10 hidden group-hover/tooltip:flex flex-col gap-1 rounded-lg border border-border bg-card p-2 shadow-lg min-w-max">
            {hidden.map((t) => (
              <span
                key={t}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </span>
      )}
    </div>
  );
}
