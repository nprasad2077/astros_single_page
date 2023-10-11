import React from "react";

const PitchesTable = ({ data, onSelectPitch }) => {
  return (
    <table className="border-seperate border-spacing-3 border border-slate-500">
      <thead>
        <tr>
            <th className="border border-slate-600">Inning & Count</th>
            <th className="border border-slate-600">Pitch Type & Speed</th>
            <th className="border border-slate-600">Batter vs. Pitcher</th>
            <th className="border border-slate-600">Outcome</th>
        </tr>
      </thead>
      <tbody>
      {data.map((pitch, index) => (
          <tr key={index} onClick={() => onSelectPitch(pitch)}>
            <td>{pitch.inning_half === '0' ? 'TOP' : 'BOTTOM'} {pitch.inning} ({pitch.strikes}-{pitch.balls})</td>
            <td>{pitch.pitch_type} | {parseFloat(pitch.initial_speed).toFixed(0)} MPH </td>
            <td>{pitch.batter_name} vs {pitch.pitcher_name}</td>
            <td>{pitch.event_type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PitchesTable;
