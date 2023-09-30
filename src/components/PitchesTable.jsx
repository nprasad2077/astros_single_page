import React from "react";
import "../styles/PitchesTable.css";

const PitchesTable = ({ data, onSelectPitch }) => {
  return (
    <table className="pitches-table">
      <thead>
        <tr>
          <th className="header-cell">Inning & Count</th>
          <th className="header-cell">Pitch Type & Speed</th>
          <th className="header-cell">Batter vs. Pitcher</th>
          <th className="header-cell">Outcome</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pitch, index) => (
          <tr key={index} onClick={() => onSelectPitch(pitch)}>
            <td>
              {pitch.inning_half === "0" ? "TOP" : "BOTTOM"} {pitch.inning} (
              {pitch.strikes}-{pitch.balls})
            </td>
            <td>
              {pitch.pitch_type} | {parseFloat(pitch.initial_speed).toFixed(0)}{" "}
              MPH{" "}
            </td>
            <td>
              {pitch.batter_name} vs {pitch.pitcher_name}
            </td>
            <td>{pitch.event_type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PitchesTable;
