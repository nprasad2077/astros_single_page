import React from 'react'
import '../styles/GameDetails.css'

const GameDetails = ({pitch}) => {
  return (
    <table className="pitch-table">
      <thead>
        <tr>
          <th colSpan={2}>Game Details</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Strike Zone (Top)</td>
          <td>
            {pitch && pitch.sz_top
              ? parseFloat(pitch.sz_top).toFixed(2) + " FT"
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Strike Zone (Bottom)</td>
          <td>
            {pitch && pitch.sz_bottom
              ? parseFloat(pitch.sz_bottom).toFixed(2) + " FT"
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Pitch Speed at Release</td>
          <td>
            {pitch && pitch.initial_speed
              ? parseFloat(pitch.initial_speed).toFixed(2) + " MPH"
              : "N/A"}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default GameDetails