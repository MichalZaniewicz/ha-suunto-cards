import "./suunto-device-editor";
import "./suunto-last-workout-card";
import "./suunto-hr-zones-card";
import "./suunto-sleep-readiness-card";
import "./suunto-recovery-card";
import "./suunto-training-load-card";
import "./suunto-week-stats-card";
import "./suunto-today-card";

interface CustomCardEntry {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
}

declare global {
  interface Window {
    customCards?: CustomCardEntry[];
  }
}

window.customCards = window.customCards || [];
window.customCards.push(
  {
    type: "suunto-last-workout-card",
    name: "Suunto - Last Workout",
    description:
      "Summary of your most recent Suunto workout: distance, HR, training effect, weather and achievements.",
    preview: true,
  },
  {
    type: "suunto-hr-zones-card",
    name: "Suunto - Heart Rate Zones",
    description: "Time spent in each heart-rate zone during your last workout, with bpm thresholds.",
    preview: true,
  },
  {
    type: "suunto-sleep-readiness-card",
    name: "Suunto - Sleep & Readiness",
    description: "Last night's sleep stages, HRV/resting HR vs. baseline, and today's readiness score.",
    preview: true,
  },
  {
    type: "suunto-recovery-card",
    name: "Suunto - Recovery",
    description: "Recovery balance, countdown until fully recovered, and current stress level.",
    preview: true,
  },
  {
    type: "suunto-training-load-card",
    name: "Suunto - Training Load",
    description: "Fitness/fatigue/form (CTL/ATL/TSB) with a 30-day trend line and acute:chronic workload ratio.",
    preview: true,
  },
  {
    type: "suunto-week-stats-card",
    name: "Suunto - Week & Lifetime",
    description: "This week's volume plus a lifetime breakdown by activity.",
    preview: true,
  },
  {
    type: "suunto-today-card",
    name: "Suunto - Today",
    description: "Live steps, energy and heart rate snapshot for today.",
    preview: true,
  }
);

// eslint-disable-next-line no-console
console.info(
  "%c SUUNTO-CARDS %c 7 cards loaded ",
  "color: #fff; background: #d98a1d; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 6px;",
  "color: #d98a1d; background: transparent; font-weight: 500;"
);
