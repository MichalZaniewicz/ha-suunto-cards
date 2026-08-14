import { html, svg, nothing, type TemplateResult } from "lit";

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

export interface ChartSeries {
  points: SparklinePoint[];
  colorVar: string;
}

function seriesScale(points: SparklinePoint[]): { min: number; span: number } {
  const values = points.map((p) => p.v);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return { min, span: max - min || 1 };
}

/**
 * Several trend lines sharing one small chart. `sharedScale: true` maps every
 * series against one combined min/max (correct when they're the same unit,
 * e.g. CTL/ATL/TSB - all TSS-derived); `false` normalizes each series to its
 * own range independently, for comparing the SHAPE of unrelated-unit metrics
 * (e.g. resting HR in bpm next to HRV in ms) without implying a shared scale.
 */
export function multiLineChart(
  series: ChartSeries[],
  width = 300,
  height = 70,
  sharedScale = true
): TemplateResult | typeof nothing {
  const usable = series.filter((s) => s.points.length >= 2);
  if (usable.length === 0) return nothing;

  const padY = height * 0.1;
  const usableH = height - padY * 2;
  const shared = sharedScale ? seriesScale(usable.flatMap((s) => s.points)) : undefined;

  // Sub-fragments containing <path>/<circle> must use Lit's `svg` tag, not
  // `html` - a nested `html` template creates its elements in the HTML
  // namespace, so they'd sit inertly inside the real <svg> and never render,
  // even though geometry/paint attributes are present in the DOM.
  const lines = usable.map((s) => {
    const { min, span } = shared ?? seriesScale(s.points);
    const stepX = width / (s.points.length - 1);
    const coords = s.points.map((p, i) => {
      const x = i * stepX;
      const y = padY + usableH - ((p.v - min) / span) * usableH;
      return [x, y] as const;
    });
    const d = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const [lastX, lastY] = coords[coords.length - 1];
    return svg`
      <path
        d=${d}
        fill="none"
        stroke=${s.colorVar}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <circle cx=${lastX} cy=${lastY} r="3" fill=${s.colorVar}></circle>
    `;
  });

  return html`
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" class="sparkline">
      ${lines}
    </svg>
  `;
}

export interface Bar {
  value: number;
  label?: string;
  /** Overrides the chart's default color for this one bar (e.g. the fastest lap). */
  colorVar?: string;
}

/** A simple vertical bar chart (e.g. weekly volume) - bars share one linear scale. */
export function barChart(bars: Bar[], colorVar: string, width = 300, height = 70): TemplateResult | typeof nothing {
  if (bars.length === 0) return nothing;
  const max = Math.max(...bars.map((b) => b.value), 0.0001);
  const gap = 4;
  const barWidth = (width - gap * (bars.length - 1)) / bars.length;

  const rects = bars.map((b, i) => {
    const h = Math.max((b.value / max) * height, 2);
    const x = i * (barWidth + gap);
    const y = height - h;
    return svg`
      <rect x=${x} y=${y} width=${barWidth} height=${h} rx="2" fill=${b.colorVar ?? colorVar}>
        <title>${b.label ?? b.value}</title>
      </rect>
    `;
  });

  return html`
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" class="sparkline">
      ${rects}
    </svg>
  `;
}
