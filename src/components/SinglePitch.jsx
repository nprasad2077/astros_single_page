import React from "react";
import axios from "axios"; // Note: 'axios' is imported but not used in the provided code.
import "../styles/SinglePitch.css";

const SinglePitch = ({ pitch }) => {
  console.log(pitch);

  return (
    <table className="pitch-table">
      <thead>
        <tr>
          <th colSpan={2}>Pitch Details</th>
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
        <tr>
          <td>Initial Position (Ball position at release in pitcher's hand)</td>
          <td>
            {pitch
              ? `X: ${
                  pitch.init_pos_x
                    ? parseFloat(pitch.init_pos_x).toFixed(2)
                    : "N/A"
                },
                         Y: ${
                           pitch.init_pos_y
                             ? parseFloat(pitch.init_pos_y).toFixed(2)
                             : "N/A"
                         },
                         Z: ${
                           pitch.init_pos_z
                             ? parseFloat(pitch.init_pos_z).toFixed(2)
                             : "N/A"
                         }`
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Initial Velocity</td>
          <td>
            {pitch
              ? `X: ${
                  pitch.init_vel_x
                    ? parseFloat(pitch.init_vel_x).toFixed(2)
                    : "N/A"
                },
                         Y: ${
                           pitch.init_vel_y
                             ? parseFloat(pitch.init_vel_y).toFixed(2)
                             : "N/A"
                         },
                         Z: ${
                           pitch.init_vel_z
                             ? parseFloat(pitch.init_vel_z).toFixed(2)
                             : "N/A"
                         }`
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Initial Acceleration</td>
          <td>
            {pitch
              ? `X: ${
                  pitch.init_accel_x
                    ? parseFloat(pitch.init_accel_x).toFixed(2)
                    : "N/A"
                },
                         Y: ${
                           pitch.init_accel_y
                             ? parseFloat(pitch.init_accel_y).toFixed(2)
                             : "N/A"
                         },
                         Z: ${
                           pitch.init_accel_z
                             ? parseFloat(pitch.init_accel_z).toFixed(2)
                             : "N/A"
                         }`
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Plate Speed (Speed of ball when crossing plate)</td>
          <td>
            {pitch && pitch.plate_speed
              ? parseFloat(pitch.plate_speed).toFixed(2) + " MPH"
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Position at Plate</td>
          <td>
            {pitch
              ? `X: ${
                  pitch.plate_x ? parseFloat(pitch.plate_x).toFixed(2) : "N/A"
                }, 
                             Y: ${
                               pitch.plate_y
                                 ? parseFloat(pitch.plate_y).toFixed(2)
                                 : "N/A"
                             }, 
                             Z: ${
                               pitch.plate_z
                                 ? parseFloat(pitch.plate_z).toFixed(2)
                                 : "N/A"
                             }`
              : "N/A"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SinglePitch;
