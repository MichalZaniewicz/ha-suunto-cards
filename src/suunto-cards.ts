import "./suunto-device-editor";
import "./suunto-last-workout-card";
import "./suunto-hr-zones-card";
import "./suunto-sleep-readiness-card";
import "./suunto-recovery-card";
import "./suunto-training-load-card";
import "./suunto-week-stats-card";
import "./suunto-today-card";
import "./suunto-lifetime-card";
import "./suunto-recent-workouts-card";
import "./suunto-elevation-card";
import "./suunto-location-card";
import "./suunto-fitness-card";
import "./suunto-last-workout-tile-card";
import "./suunto-pmc-card";
import "./suunto-recovery-trends-card";
import "./suunto-weekly-volume-card";

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
  },
  {
    type: "suunto-lifetime-card",
    name: "Suunto - Lifetime Totals",
    description: "Total distance, time, energy, workouts and active days since you started.",
    preview: true,
  },
  {
    type: "suunto-recent-workouts-card",
    name: "Suunto - Recent Workouts",
    description: "A scrollable log of your last 15 workouts - activity, distance and duration.",
    preview: true,
  },
  {
    type: "suunto-elevation-card",
    name: "Suunto - Elevation & Climbing",
    description: "Ascent, descent, climb/descend times, min/max altitude and ascent rate for your last workout.",
    preview: true,
  },
  {
    type: "suunto-location-card",
    name: "Suunto - Start Location",
    description: "Where your last workout started, with a one-tap link to open it in Maps.",
    preview: true,
  },
  {
    type: "suunto-fitness-card",
    name: "Suunto - Fitness",
    description: "VO2max, estimated VO2max and fitness age, with when they were last measured.",
    preview: true,
  },
  {
    type: "suunto-last-workout-tile-card",
    name: "Suunto - Last Workout (compact)",
    description: "A single-row summary of your last workout, for denser dashboards.",
    preview: true,
  },
  {
    type: "suunto-pmc-card",
    name: "Suunto - Performance Management",
    description: "CTL/ATL/TSB plotted together over 90 days - the classic fitness/fatigue/form chart.",
    preview: true,
  },
  {
    type: "suunto-recovery-trends-card",
    name: "Suunto - Recovery Trends",
    description: "Resting heart rate and HRV trend lines over 30 days, each against its own baseline.",
    preview: true,
  },
  {
    type: "suunto-weekly-volume-card",
    name: "Suunto - Weekly Volume",
    description: "A 12-week bar chart of your training distance, with the average and total.",
    preview: true,
  }
);

// eslint-disable-next-line no-console
console.info(
  "%c SUUNTO-CARDS %c 16 cards loaded ",
  "color: #fff; background: #d98a1d; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 6px;",
  "color: #d98a1d; background: transparent; font-weight: 500;"
);
