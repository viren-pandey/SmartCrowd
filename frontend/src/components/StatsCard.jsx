import React from "react";

export default function StatsCard({ total }) {
  return (
    <div className="stats-card">
      <h2>Total People</h2>
      <h1>{total}</h1>
    </div>
  );
}
