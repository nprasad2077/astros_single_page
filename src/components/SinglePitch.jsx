import React from "react";
import axios from "axios";
import "../styles/SinglePitch.css";

const SinglePitch = ({ pitch }) => {

  console.log((pitch));

  return (
 
      <table className="pitch-table">
        <thead>
          <tr>
            <th colSpan={2}>Pitch Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Strike Zone (Top)
            </td>
            <td>
              {pitch && pitch.sz_top ? parseFloat(pitch.sz_top).toFixed(2) : 'N/A'}
            </td>
          </tr>
        </tbody>
      </table>
 
  );
};

export default SinglePitch;
