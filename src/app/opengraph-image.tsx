import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Анна Шильман — клинический нутрициолог, натуропат";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #f5f1e8 0%, #e8efe0 50%, #d9e8d0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: "#3A7D5C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#1f2d24",
              letterSpacing: "0.02em",
            }}
          >
            NutriWave
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.1,
              fontWeight: 600,
              color: "#1f2d24",
              maxWidth: 1000,
            }}
          >
            Анна Шильман
          </div>
          <div
            style={{
              fontSize: 38,
              lineHeight: 1.3,
              color: "#3A7D5C",
              fontWeight: 500,
              maxWidth: 1000,
            }}
          >
            Клинический и перинатальный нутрициолог, натуропат
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "#54695d",
              maxWidth: 1000,
              marginTop: 8,
            }}
          >
            Индивидуальные онлайн-консультации, генетика питания, нутрицевтическая поддержка
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {["Научный подход", "Доказательная медицина", "Генетика"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 22px",
                  borderRadius: 999,
                  background: "rgba(58, 125, 92, 0.12)",
                  color: "#3A7D5C",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 26, color: "#54695d", fontWeight: 600 }}>
            nutriwave.pro
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
