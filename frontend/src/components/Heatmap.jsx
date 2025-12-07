import React from "react";

export default function Heatmap({ zones }) {
  const getColor = (count) => {
    if (count > 6) return "#ff4d4d";       // critical
    if (count >= 5) return "#ffb84d";      // warning
    return "#4dff88";                      // safe
  };

  return (
    <div className="heatmap-grid">
      {zones.length > 0
        ? zones.map((z, i) => (
            <div
              key={i}
              className="heatmap-cell"
              style={{ background: getColor(z) }}
            />
          ))
        : [...Array(9)].map((_, i) => (
            <div className="heatmap-cell placeholder" key={i} />
          ))}
    </div>
  );
}
