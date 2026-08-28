import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(path.join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFF8EE",
          padding: 60,
        }}
      >
        <img src={logoSrc} width={620} height={338} alt="MindMotions" />
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#4a3f2e",
            textAlign: "center",
          }}
        >
          Understand the Tradition. Know the Facts.
        </div>
      </div>
    ),
    size
  );
}
