import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jacob Cox | Full Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent blob */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              background: "rgba(59,130,246,0.15)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: 999,
              color: "#60a5fa",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 20px",
            }}
          >
            Full Stack Software Engineer
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 24,
            background: "linear-gradient(90deg, #f1f5f9 0%, #93c5fd 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Jacob Cox
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            maxWidth: 700,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Building modern web applications and cloud infrastructure that solve real problems.
        </div>

        {/* Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#3b82f6",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#3b82f6",
            }}
          />
          jacobcox.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
