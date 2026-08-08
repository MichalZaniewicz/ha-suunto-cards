/** activity name (as returned by the `last_activity` sensor) -> mdi icon. */
const ACTIVITY_ICONS: Array<[RegExp, string]> = [
  [/cycl|bik/i, "mdi:bike"],
  [/run/i, "mdi:run"],
  [/trek|hik/i, "mdi:hiking"],
  [/walk/i, "mdi:walk"],
  [/gym|strength|weight/i, "mdi:dumbbell"],
  [/swim/i, "mdi:swim"],
  [/ski/i, "mdi:ski"],
  [/row/i, "mdi:rowing"],
];

export function activityIcon(activity?: string | null): string {
  if (activity) {
    for (const [pattern, icon] of ACTIVITY_ICONS) {
      if (pattern.test(activity)) return icon;
    }
  }
  return "mdi:run-fast";
}

/** OpenWeather-style two-digit icon code prefix -> mdi weather icon. */
const WEATHER_ICONS: Record<string, string> = {
  "01": "mdi:weather-sunny",
  "02": "mdi:weather-partly-cloudy",
  "03": "mdi:weather-cloudy",
  "04": "mdi:weather-cloudy",
  "09": "mdi:weather-pouring",
  "10": "mdi:weather-rainy",
  "11": "mdi:weather-lightning",
  "13": "mdi:weather-snowy",
  "50": "mdi:weather-fog",
};

export function weatherIcon(iconCode?: string | null): string {
  const prefix = iconCode?.slice(0, 2);
  return (prefix && WEATHER_ICONS[prefix]) || "mdi:weather-cloudy";
}
