/**
 * Canonical translation source. Every other language file is typed against
 * `keyof typeof en` (see localize.ts), so a missing key anywhere is a
 * compile error, not a silent English fallback discovered at runtime.
 *
 * Placeholders use `{name}` and are filled in by `t()` - plain substitution,
 * no ICU plural rules. Where English needs a singular/plural split, there
 * are `*_one` / `*_other` key pairs and the caller picks one by count; this
 * only covers a two-way split (matches every language here reasonably well,
 * though not, say, Polish's full 3-way plural grammar for every count).
 */
export const en = {
  // -- stat labels (shared across cards) --
  "stat.distance": "Distance",
  "stat.duration": "Duration",
  "stat.avg_speed": "Avg speed",
  "stat.avg_pace": "Avg pace",
  "stat.avg_hr": "Avg HR",
  "stat.max_hr": "Max HR",
  "stat.training_effect": "Training effect",
  "stat.tss": "TSS",
  "stat.epoc": "EPOC",
  "stat.feeling": "Feeling",
  "stat.energy": "Energy",
  "stat.time": "Time",
  "stat.workouts": "Workouts",
  "stat.steps": "Steps",
  "stat.heart_rate": "Heart rate",
  "stat.quality": "Quality",
  "stat.hrv": "HRV",
  "stat.hrv_delta": "HRV ({delta})",
  "stat.resting_hr": "Resting HR",
  "stat.resting_hr_delta": "Resting HR ({delta})",
  "stat.spo2": "SpO2",
  "stat.stress_level": "Stress level",
  "stat.recovery_window": "Recovery window",
  "stat.ctl": "CTL · fitness",
  "stat.atl": "ATL · fatigue",
  "stat.tsb": "TSB · form",
  "stat.readiness": "Readiness",
  "stat.recovery_balance": "Recovery balance",

  // -- card titles / subtitles --
  "card.hr_zones.title": "Heart Rate Zones",
  "card.hr_zones.last_workout": "Last workout",
  "card.sleep_readiness.title": "Sleep & Readiness",
  "card.sleep_readiness.subtitle_no_wake": "{duration} slept",
  "card.sleep_readiness.subtitle_with_wake": "{duration} slept · woke {time}",
  "card.recovery.title": "Recovery",
  "card.training_load.title": "Training Load",
  "card.training_load.subtitle_fallback": "Fitness (CTL) trend",
  "card.week_stats.title": "This Week & Lifetime",
  "card.week_stats.subtitle": "Last 7 days",
  "card.week_stats.lifetime_title": "Lifetime by activity",
  "card.today.title": "Today",
  "card.today.subtitle": "Live from your watch",

  // -- empty / loading / generic-error states --
  "empty.last_workout.title": "No recent workout",
  "empty.last_workout.subtitle": "Sync your watch with the Suunto app to see it here.",
  "empty.hr_zones.title": "No zone data",
  "empty.hr_zones.subtitle": "Your next outdoor workout with a heart-rate strap will fill this in.",
  "empty.sleep_readiness.title": "No sleep data yet",
  "empty.sleep_readiness.subtitle": "Wear your watch to bed to see it here.",
  "empty.recovery.title": "No recovery data yet",
  "empty.training_load.title": "Building your training load",
  "empty.training_load.subtitle": "Needs a bit of workout history to compute - check back after a few sessions.",
  "empty.week_stats.title": "No workout history yet",
  "empty.today.title": "No live data yet",
  "empty.loading": "Loading...",
  "empty.generic_error": "Could not load Suunto data.",

  // -- config errors (SuuntoConfigError) --
  "error.no_device": "No Suunto device found - is the suunto_app integration set up?",
  "error.multiple_devices": 'Multiple Suunto devices found - set "device_id" in the card configuration.',
  "error.device_missing": 'Configured device "{device}" has no suunto_app entities.',

  // -- status bands --
  "band.readiness.great": "Great",
  "band.readiness.fair": "Fair",
  "band.readiness.low": "Low",
  "band.recovery.well": "Well recovered",
  "band.recovery.partial": "Partially recovered",
  "band.recovery.low": "Low recovery",
  "band.recovery.fully": "Fully recovered",
  "band.recovery.recovering": "Recovering · {time} left",
  "band.hrv.low": "HRV low",
  "band.hrv.high": "HRV high",
  "band.hrv.balanced": "HRV balanced",
  "band.form.fresh": "Fresh",
  "band.form.neutral": "Neutral",
  "band.form.fatigued": "Fatigued",
  "band.form.very_fatigued": "Very fatigued",
  "band.acwr.safe": "Safe zone",
  "band.acwr.low": "Low load",
  "band.acwr.high": "High load - injury risk",

  // -- chips / composed strings --
  "chip.workout_logged_today": "Workout logged today",
  "chip.workout_today": "Workout today",
  "chip.recovering": "Recovering",
  "chip.nap": "{minutes} min nap",
  "chip.nap_earlier": "{minutes} min nap (earlier)",
  "chip.workouts_30d": "{count} workouts in the last 30 days",
  "chip.acwr": "ACWR {value} · {label}",
  "chip.more_activity_one": "+{count} more activity type",
  "chip.more_activity_other": "+{count} more activity types",
  "achievement.count_one": "{count} achievement",
  "achievement.count_other": "{count} achievements",
  "achievement.rank": "Rank #{rank} on this route",

  // -- small inline labels --
  "label.zone": "Zone {n}",
  "label.deep": "Deep",
  "label.light": "Light",
  "label.rem": "REM",

  // -- device editor --
  "editor.auto_detect": "This card auto-detects your Suunto device - no configuration needed.",
  "editor.pick_device": "Multiple Suunto devices were found - pick which one this card should read.",
  "editor.device_label": "Suunto device",

  // -- card 8: lifetime totals --
  "card.lifetime.title": "Lifetime Totals",
  "card.lifetime.subtitle": "Since you started",
  "stat.active_days": "Active days",
  "empty.lifetime.title": "No lifetime data yet",

  // -- card 9: recent workouts --
  "card.recent_workouts.title": "Recent Workouts",
  "empty.recent_workouts.title": "No recent workouts",

  // -- card 10: elevation & climbing --
  "card.elevation.title": "Elevation & Climbing",
  "stat.ascent": "Ascent",
  "stat.descent": "Descent",
  "stat.ascent_time": "Ascent time",
  "stat.descent_time": "Descent time",
  "stat.min_altitude": "Min altitude",
  "stat.max_altitude": "Max altitude",
  "stat.ascent_rate": "Ascent rate",
  "empty.elevation.title": "No elevation data",
  "empty.elevation.subtitle": "Only outdoor workouts with a barometer record this.",

  // -- card 11: start location --
  "card.location.title": "Start Location",
  "location.open_in_maps": "Open in Maps",
  "empty.location.title": "No location data",
  "empty.location.subtitle": "Indoor workouts have no GPS start point.",

  // -- card 12: fitness / VO2max --
  "card.fitness.title": "Fitness",
  "stat.vo2max": "VO2max",
  "stat.estimated_vo2max": "Estimated VO2max",
  "stat.fitness_age": "Fitness age",
  "fitness.measured": "Measured {time} · {activity}",
  "empty.fitness.title": "No fitness data yet",
  "empty.fitness.subtitle": "Suunto computes this from running or walking workouts only.",

  // -- card 14: performance management chart --
  "card.pmc.title": "Performance Management",
  "card.pmc.subtitle": "90-day trend",

  // -- card 15: recovery trends --
  "card.recovery_trends.title": "Recovery Trends",
  "card.recovery_trends.subtitle": "30-day baseline",
  "empty.recovery_trends.title": "No recovery trend data yet",

  // -- card 16: weekly volume --
  "card.weekly_volume.title": "Weekly Volume",
  "card.weekly_volume.subtitle": "Last 12 weeks",
  "empty.weekly_volume.title": "No weekly volume data yet",
  "stat.average": "Average",
  "stat.total": "Total",

  // -- card 17: HR curve --
  "card.hr_curve.title": "Heart Rate Curve",
  "card.hr_curve.subtitle": "Last 24 hours",
  "stat.hr_now": "Now",
  "stat.hr_min": "Today's min",
  "stat.hr_max": "Today's max",
  "empty.hr_curve.title": "No live HR data yet",
  "empty.hr_curve.subtitle": "Wear your watch and sync to see today's curve here.",

  // -- card 18: sleep trends --
  "card.sleep_trends.title": "Sleep Trends",
  "card.sleep_trends.subtitle": "Last 30 nights",
  "empty.sleep_trends.title": "No sleep trend data yet",

  // -- card 19: weekly goal --
  "card.weekly_goal.title": "Weekly Goal",
  "card.weekly_goal.subtitle": "{value} of {goal} km",
  "empty.weekly_goal.title": "No weekly distance yet",
  "editor.goal_label": "Weekly goal (km)",

  // -- card 20: activity streak --
  "card.streak.title": "Activity Streak",
  "streak.days_one": "{count} day streak",
  "streak.days_other": "{count} days streak",
  "streak.none": "No active streak - get moving today",
  "empty.streak.title": "No workout history yet",

  // -- card 21: just finished --
  "just_finished.title": "Nice work!",
  "just_finished.idle.title": "Waiting for your next workout",
  "just_finished.idle.subtitle": "This lights up right after your watch syncs a new one.",
  "empty.just_finished.title": "No recent workout",

  // -- card 22: activity trends --
  "card.activity_trends.title": "Activity Trends",
  "card.activity_trends.subtitle": "Last 14 days",
  "empty.activity_trends.title": "No activity trend data yet",

  // -- card 23: recovery balance trend --
  "card.recovery_balance_trend.title": "Recovery Balance Trend",
  "card.recovery_balance_trend.subtitle": "Last 14 days",
  "empty.recovery_balance_trend.title": "No recovery trend data yet",

  // -- card 24: readiness trend --
  "card.readiness_trend.title": "Readiness Trend",
  "card.readiness_trend.subtitle": "Last 30 days",
  "empty.readiness_trend.title": "No readiness trend data yet",

  // -- last-workout / sleep-readiness enrichments --
  "stat.cadence": "Cadence",
  "stat.pct_hrmax": "% of max HR",
  "stat.sleep_avg_hr": "Sleep avg HR",
  "stat.sleep_min_hr": "Sleep min HR",
  "chip.bedtime": "Bedtime {time}",
} as const;
