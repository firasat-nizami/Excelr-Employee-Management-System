import React from "react";

export default function CardStat({ title, value }) {
  return (
    <div className="card">
      <div style={{ fontSize: "14px", color: "#6b7280" }}>{title}</div>
      <div style={{ fontSize: "26px", fontWeight: "bold", marginTop: "6px" }}>
        {value}
      </div>
    </div>
  );
}

