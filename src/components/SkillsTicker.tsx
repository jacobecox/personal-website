"use client";

import { useRef, useEffect } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiPython, SiGo, SiVercel, SiExpress,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiPrisma,
  SiClickhouse, SiFusionauth,
  SiKubernetes, SiHelm, SiGooglecloud, SiDocker, SiGit, SiCloudflare, SiLinux,
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaDatabase } from "react-icons/fa";
import type { IconType } from "react-icons";

type Skill = { label: string; Icon?: IconType; color?: string; imgSrc?: string };

const row1: Skill[] = [
  { label: "React",        Icon: SiReact,      color: "#61DAFB" },
  { label: "Next.js",      Icon: SiNextdotjs },
  { label: "TypeScript",   Icon: SiTypescript, color: "#3178C6" },
  { label: "JavaScript",   Icon: SiJavascript, color: "#F7DF1E" },
  { label: "Tailwind CSS", Icon: SiTailwindcss,color: "#06B6D4" },
  { label: "Python",       Icon: SiPython,     color: "#3776AB" },
  { label: "Go",           Icon: SiGo,         color: "#00ACD7" },
  { label: "Node.js",      Icon: SiNodedotjs,  color: "#339933" },
  { label: "Express.js",   Icon: SiExpress },
  { label: "Vercel",       Icon: SiVercel },
];

const row2: Skill[] = [
  { label: "PostgreSQL",       Icon: SiPostgresql,    color: "#336791" },
  { label: "MySQL",            Icon: SiMysql,         color: "#4479A1" },
  { label: "MongoDB",          Icon: SiMongodb,       color: "#47A248" },
  { label: "Redis",            Icon: SiRedis,         color: "#FF4438" },
  { label: "Prisma",           Icon: SiPrisma },
  { label: "ClickHouse",       Icon: SiClickhouse,    color: "#FFCC01" },
  { label: "FusionAuth",       Icon: SiFusionauth,    color: "#FF4438" },
  { label: "Airflow",          imgSrc: "/airflow-icon.svg" },
  { label: "Vector Databases", Icon: FaDatabase,      color: "#6366F1" },
];

const row3: Skill[] = [
  { label: "Kubernetes", Icon: SiKubernetes,  color: "#326CE5" },
  { label: "Helm",       Icon: SiHelm,        color: "#5B8DEF" },
  { label: "Docker",     Icon: SiDocker,      color: "#2496ED" },
  { label: "AWS",        Icon: FaAws,         color: "#FF9900" },
  { label: "GCP",        Icon: SiGooglecloud, color: "#4285F4" },
  { label: "Azure",      Icon: FaMicrosoft,   color: "#0078D4" },
  { label: "Cloudflare", Icon: SiCloudflare,  color: "#F38020" },
  { label: "Git",        Icon: SiGit,         color: "#F05032" },
  { label: "Linux",      Icon: SiLinux,       color: "#FCC624" },
];

function TickerRow({
  skills,
  direction,
  speed = 30,
}: {
  skills: Skill[];
  direction: "left" | "right";
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const doubled = [...skills, ...skills];
  const keyframe = direction === "left" ? "ticker-left-px" : "ticker-right-px";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Measure the rendered width of exactly one copy (half of total)
    const halfWidth = el.scrollWidth / 2;
    // Pause, apply pixel offset, then restart so the keyframe uses exact pixels
    el.style.animation = "none";
    void el.offsetHeight; // force reflow
    el.style.setProperty("--t-offset", `-${halfWidth}px`);
    el.style.animation = `${keyframe} ${speed}s linear infinite`;
  }, [keyframe, speed]);

  return (
    <div className="overflow-hidden">
      <div
        ref={ref}
        style={{
          display: "flex",
          width: "max-content",
          gap: "1rem",
          willChange: "transform",
        }}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted"
          >
            {skill.imgSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={skill.imgSrc} alt={skill.label} className="h-4 w-4 shrink-0" />
            ) : skill.Icon ? (
              <skill.Icon style={{ color: skill.color }} className="h-4 w-4 shrink-0" />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            )}
            {skill.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsTicker() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-xl border border-border bg-card/30 py-6 space-y-3 before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-linear-to-r before:from-background before:to-transparent after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-linear-to-l after:from-background after:to-transparent">
        <TickerRow skills={row1} direction="left"  speed={35} />
        <TickerRow skills={row2} direction="right" speed={40} />
        <TickerRow skills={row3} direction="left"  speed={38} />
      </div>
    </div>
  );
}
