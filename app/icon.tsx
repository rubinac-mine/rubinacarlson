import { ImageResponse } from "next/og";

// Favicon for rubinacarlson.com
// Renders as a 32x32 PNG at build time. Next.js wires it up automatically.
// Edit the colours, glyph, or font to iterate.

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#C2553D",
          color: "#F5F0E8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        R
      </div>
    ),
    { ...size }
  );
}
