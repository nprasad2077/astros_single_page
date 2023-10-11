import React from "react";

const GameDetails = ({ pitch }) => {
  return (
    <div className="overflow-x-auto overflow-y-auto">
      <table
        data-theme="business"
        className="table table-fixed table-lg table-zebra w-full border border-collapse border-emerald-700"
      >
        <thead className="text-center bg-emerald-900">
          <tr>
            <th className="text-white text-lg border-emerald-800" colSpan={2}>
              Game Details (selected)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-emerald-900">Inning</td>
            <td className="border border-emerald-900">
              {pitch
                ? pitch.inning_half == "0"
                  ? "Top " + pitch.inning
                  : pitch.inning_half == "1"
                  ? "Bottom " + pitch.inning
                  : "N/A"
                : "N/A"}
            </td>
          </tr>

          <tr>
            <td className="border border-emerald-900">Home Team</td>
            <td className="border border-emerald-900">
              {pitch && pitch.home_team_name ? pitch.home_team_name : "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border border-emerald-900">Away Team</td>
            <td className="border border-emerald-900">
              {pitch && pitch.away_team_name ? pitch.away_team_name : "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border border-emerald-900">Pitcher</td>
            <td className="border border-emerald-900">
              {pitch && pitch.pitcher_name ? pitch.pitcher_name : "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border border-emerald-900">Batter</td>
            <td className="border border-emerald-900">
              {pitch && pitch.batter_name ? pitch.batter_name : "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border border-emerald-900">Balls</td>
            <td className="border border-emerald-900">
              {pitch && pitch.balls ? pitch.balls : "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border border-emerald-900">Strikes</td>
            <td className="border border-emerald-900">
              {pitch && pitch.strikes ? pitch.strikes : "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border border-emerald-900">Pitch Type</td>
            <td className="border border-emerald-900">
              {pitch && pitch.pitch_type ? pitch.pitch_type : "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border border-emerald-900">Event Result</td>
            <td className="border border-emerald-900">
              {pitch && pitch.event_result ? pitch.event_result : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameDetails;
