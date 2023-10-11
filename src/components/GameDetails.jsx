import React from "react";

const GameDetails = ({ pitch }) => {
  return (
    <table data-theme='business' className="w-full">
      <thead>
        <tr>
          <th colSpan={2}>Game Details (selected)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Inning</td>
          <td>
            {pitch
              ? pitch.inning_half == '0'
                ? "Top " + pitch.inning
                : pitch.inning_half == '1'
                ? "Bottom " + pitch.inning
                : "N/A" 
              : "N/A"}
          </td>
        </tr>

        <tr>
          <td>Home Team</td>
          <td>
            {pitch && pitch.home_team_name ? pitch.home_team_name : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Away Team</td>
          <td>
            {pitch && pitch.away_team_name ? pitch.away_team_name : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Pitcher</td>
          <td>{pitch && pitch.pitcher_name ? pitch.pitcher_name : "N/A"}</td>
        </tr>
        <tr>
          <td>Batter</td>
          <td>{pitch && pitch.batter_name ? pitch.batter_name : "N/A"}</td>
        </tr>
        <tr>
          <td>Balls</td>
          <td>{pitch && pitch.balls ? pitch.balls : "N/A"}</td>
        </tr>
        <tr>
          <td>Strikes</td>
          <td>{pitch && pitch.strikes ? pitch.strikes : "N/A"}</td>
        </tr>
        <tr>
          <td>Pitch Type</td>
          <td>{pitch && pitch.pitch_type ? pitch.pitch_type : "N/A"}</td>
        </tr>
        <tr>
          <td>Event Result</td>
          <td>{pitch && pitch.event_result ? pitch.event_result : "N/A"}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GameDetails;
