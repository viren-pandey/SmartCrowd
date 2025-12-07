import React, { useEffect, useState } from "react";
import Heatmap from "./components/Heatmap.jsx";
import StatsCard from "./components/StatsCard.jsx";
import AlertsPanel from "./components/AlertsPanel.jsx";

const API = "http://localhost:8000";

export default function App() {
  const [zones, setZones] = useState([]);
  const [total, setTotal] = useState(0);
  const [level, setLevel] = useState("SAFE");
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`${API}/stats`);
        const data = await res.json();

        setZones(data.zones || []);
        setTotal(data.total_count || 0);
        setLevel(data.level || "SAFE");
        setError(null);
      } catch (err) {
        setError("Backend connection lost.");
      }
    };

    loadData();
    const interval = setInterval(loadData, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>SmartCrowd – Real-Time Crowd Monitor</h1>
      </header>

      <div className="grid-layout">
        <section className="left-panel">
          <div className="video-box">
            <img
              src={`${API}/video_feed`}
              alt="Live Feed"
              className="video-feed"
            />
          </div>

          <div className="heatmap-box">
            <h2>Heatmap</h2>
            <Heatmap zones={zones} />
          </div>
        </section>

        <section className="right-panel">
          <StatsCard total={total} />
          <AlertsPanel level={level} zones={zones} error={error} />
        </section>
      </div>
    </div>
  );
}
