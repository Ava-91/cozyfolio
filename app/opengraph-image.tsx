import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "#0D1117",
          color: "#E6EDF3",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background: "#58A6FF",
            opacity: 0.12,
            filter: "blur(80px)",
            right: "-150px",
            top: "-150px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "9999px",
              background: "#58A6FF",
            }}
          />

          <span
            style={{
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            Ava
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            letterSpacing: "-3px",
            lineHeight: 1.1,
          }}
        >
          Cozyfolio
        </div>

        {/* Description */}
        <div
          style={{
            marginTop: "25px",
            fontSize: "30px",
            color: "#8B949E",
            maxWidth: "850px",
            lineHeight: 1.4,
          }}
        >
          Building cozy internet things, one commit at a time ✨
        </div>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "45px",
          }}
        >
          {[
            "Next.js",
            "TypeScript",
            "React",
            "Tailwind CSS",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "10px 18px",
                borderRadius: "9999px",
                border: "1px solid #30363D",
                background: "#161B22",
                color: "#E6EDF3",
                fontSize: "22px",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "70px",
            fontSize: "20px",
            color: "#8B949E",
          }}
        >
          ava-91.github.io • frontend developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}