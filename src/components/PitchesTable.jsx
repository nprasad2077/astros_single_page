import React from "react";

const PitchesTable = ({ data, onSelectPitch }) => {
  return (
    <div className="overflow-x-auto max-h-screen" data-theme='business'>
      <table className=" table table-auto table-sm table-zebra cursor-pointer table-pin-rows border-separate border-spacing-1 border border-slate-500">
        <thead className="text-base text-center text-white">
          <tr>
            <th className="bg-slate-800 border border-slate-600">Inning & Count</th>
            <th className="bg-slate-800  border border-slate-600">Pitch Type & Speed</th>
            <th className="bg-slate-800  border border-slate-600">Batter vs. Pitcher</th>
            <th className="bg-slate-800  border border-slate-600">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pitch, index) => (
            <tr key={index} onClick={() => onSelectPitch(pitch)}>
              <td className="border border-slate-700">
                {pitch.inning_half === "0" ? "TOP" : "BOTTOM"} {pitch.inning} (
                {pitch.strikes}-{pitch.balls})
              </td>
              <td className="border border-slate-700">
                {pitch.pitch_type} |{" "}
                {parseFloat(pitch.initial_speed).toFixed(0)} MPH{" "}
              </td>
              <td className="border border-slate-700">
                {pitch.batter_name} vs {pitch.pitcher_name}
              </td>
              <td className="border border-slate-700">{pitch.event_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PitchesTable;
