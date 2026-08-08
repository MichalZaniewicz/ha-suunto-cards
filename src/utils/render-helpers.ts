import { html, nothing, type TemplateResult } from "lit";

/** A single flex-grow-sized, colored segment of a horizontal stacked bar. */
export interface BarSegment {
  flexGrow: number;
  colorVar: string;
  title?: string;
}

/** Reused by HR zones, sleep stages, and any future proportional breakdown. */
export function segmentedBar(segments: BarSegment[]): TemplateResult {
  return html`
    <div class="bar">
      ${segments.map(
        (s) =>
          html`<div
            class="seg"
            style="flex-grow:${s.flexGrow};background:${s.colorVar}"
            title=${s.title ?? ""}
          ></div>`
      )}
    </div>
  `;
}

/**
 * A circular progress ring (readiness, recovery balance, ACWR, ...).
 * Self-contained SVG root so it's safe to splice into any `html` template.
 */
export function progressRing(pct: number, colorVar: string, size = 64, stroke = 6): TemplateResult {
  const clamped = Math.max(0, Math.min(100, pct));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (clamped / 100) * c;
  const center = size / 2;
  return html`
    <svg width=${size} height=${size} viewBox="0 0 ${size} ${size}" class="ring">
      <circle
        cx=${center}
        cy=${center}
        r=${r}
        fill="none"
        stroke="var(--divider-color)"
        stroke-width=${stroke}
      ></circle>
      <circle
        cx=${center}
        cy=${center}
        r=${r}
        fill="none"
        stroke=${colorVar}
        stroke-width=${stroke}
        stroke-linecap="round"
        stroke-dasharray=${c}
        stroke-dashoffset=${offset}
        transform="rotate(-90 ${center} ${center})"
      ></circle>
    </svg>
  `;
}

export interface SparklinePoint {
  t: number;
  v: number;
}

/** A filled trend line with an emphasized endpoint - scales to its container via CSS. */
export function sparkline(
  points: SparklinePoint[],
  colorVar: string,
  width = 300,
  height = 56
): TemplateResult | typeof nothing {
  if (points.length < 2) return nothing;

  const values = points.map((p) => p.v);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const padY = height * 0.12;
  const usableH = height - padY * 2;
  const stepX = width / (points.length - 1);

  const coords = points.map((p, i) => {
    const x = i * stepX;
    const y = padY + usableH - ((p.v - min) / span) * usableH;
    return [x, y] as const;
  });

  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;
  const [lastX, lastY] = coords[coords.length - 1];

  return html`
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" class="sparkline">
      <path d=${area} fill=${colorVar} fill-opacity="0.14" stroke="none"></path>
      <path d=${line} fill="none" stroke=${colorVar} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx=${lastX} cy=${lastY} r="3" fill=${colorVar}></circle>
    </svg>
  `;
}
