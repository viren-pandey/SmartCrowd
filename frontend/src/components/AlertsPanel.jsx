import React from "react";

export default function AlertsPanel({ level, zones, error }) {
  const hasError = Boolean(error);

  const criticalZones = zones
    .map((count, idx) => ({ idx, count }))
    .filter((z) => z.count > 6);

  let message = "";
  let badge = "";
  let tone = "";

  if (hasError) {
    badge = "SYSTEM ERROR";
    message = error;
    tone = "error";
  } else if (level === "CRITICAL") {
    badge = "CRITICAL ALERT";
    message =
      criticalZones.length > 0
        ? `Critical density in zones: ${criticalZones
            .map((z) => z.idx + 1)
            .join(", ")}`
        : "Critical crowd level detected.";
    tone = "critical";
  } else if (level === "WARNING") {
    badge = "WARNING";
    message = "Crowd level rising. Monitor zone activity.";
    tone = "warning";
  } else {
    badge = "SAFE";
    message = "Crowd levels stable.";
    tone = "safe";
  }

  return (
    <div className={`alert-box ${tone}`}>
      <h2>Alerts</h2>
      <strong>{badge}</strong>
      <p>{message}</p>
    </div>
  );
}
