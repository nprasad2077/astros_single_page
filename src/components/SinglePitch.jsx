import React from "react";
import axios from "axios";
import "../styles/SinglePitch.css";

const SinglePitch = ({ pitch }) => {

  console.log((pitch));

  return (
    <div>
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
              {pitch.sz_top}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SinglePitch;
