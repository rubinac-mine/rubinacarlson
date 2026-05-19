import { ImageResponse } from "next/og";

// Apple touch icon (180x180) for iOS home screen.
// Same brand as the favicon, scaled and rounded.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 120,
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
