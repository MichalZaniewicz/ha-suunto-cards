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

export interface RoutePoint {
  lat: number;
  lon: number;
  speedKmh: number;
}

/**
 * Colors a point by its speed relative to THIS route's own min/max (a 5-step
 * cool-to-hot scale using the same `--sc-sev-*` tokens the rest of the card
 * family already uses for "how hard"), not a fixed km/h threshold - a
 * runner's "fast" is a cyclist's crawl, so relative-to-this-workout coloring
 * is what actually reads as meaningful regardless of activity. A route with
 * almost no speed variation (e.g. a steady-state ride) falls back to the
 * plain accent color rather than a meaningless near-random bucket split.
 */
export function paceColorVar(speedKmh: number, minKmh: number, maxKmh: number): string {
  const span = maxKmh - minKmh;
  if (span < 0.5) return "var(--sc-amber)";
  const ratio = (speedKmh - minKmh) / span;
  const step = Math.min(5, Math.max(1, Math.ceil(ratio * 5) || 1));
  return `var(--sc-sev-${step})`;
}

/**
 * A GPS track drawn as a pace-colored line with start (green) / finish (red)
 * markers - self-contained SVG root, safe to splice into any `html`
 * template. Projects lon/lat to the viewBox with a uniform scale (not a
 * separate scale per axis) so the drawn shape isn't stretched, and corrects
 * longitude by cos(latitude) first - at higher latitudes a degree of
 * longitude covers less real ground distance than a degree of latitude, so
 * skipping this would visibly widen a route's east-west extent the further
 * from the equator it is.
 */
export function paceRoute(points: RoutePoint[], width = 300, height = 160): TemplateResult | typeof nothing {
  if (points.length < 2) return nothing;

  const midLatRad = (points.reduce((sum, p) => sum + p.lat, 0) / points.length) * (Math.PI / 180);
  const lonScale = Math.cos(midLatRad) || 1;

  const xs = points.map((p) => p.lon * lonScale);
  const ys = points.map((p) => -p.lat); // north (larger lat) should draw UP, i.e. smaller svg y
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const spanX = Math.max(...xs) - minX || 1e-6;
  const spanY = Math.max(...ys) - minY || 1e-6;

  const pad = 14;
  const availW = width - pad * 2;
  const availH = height - pad * 2;
  const scale = Math.min(availW / spanX, availH / spanY);
  const offsetX = pad + (availW - spanX * scale) / 2;
  const offsetY = pad + (availH - spanY * scale) / 2;

  const project = (p: RoutePoint): [number, number] => [
    offsetX + (p.lon * lonScale - minX) * scale,
    offsetY + (-p.lat - minY) * scale,
  ];

  const speeds = points.map((p) => p.speedKmh);
  const minSpeed = Math.min(...speeds);
  const maxSpeed = Math.max(...speeds);

  // Sub-fragments containing <line>/<circle> must use Lit's `svg` tag, not
  // `html` - see multiLineChart's comment above for why.
  const segments = points.slice(1).map((p, i) => {
    const [x1, y1] = project(points[i]);
    const [x2, y2] = project(p);
    const color = paceColorVar(p.speedKmh, minSpeed, maxSpeed);
    return svg`<line x1=${x1.toFixed(1)} y1=${y1.toFixed(1)} x2=${x2.toFixed(1)} y2=${y2.toFixed(1)} stroke=${color} stroke-width="4" stroke-linecap="round"></line>`;
  });

  const [startX, startY] = project(points[0]);
  const [endX, endY] = project(points[points.length - 1]);

  return html`
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" class="route-schematic">
      ${segments}
      <circle cx=${startX} cy=${startY} r="5.5" fill="var(--sc-good)" stroke="var(--card-background-color)" stroke-width="1.5"></circle>
      <circle cx=${endX} cy=${endY} r="5.5" fill="var(--sc-bad)" stroke="var(--card-background-color)" stroke-width="1.5"></circle>
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
