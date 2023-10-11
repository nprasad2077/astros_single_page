import React from "react";
import axios from "axios"; // Note: 'axios' is imported but not used in the provided code.

const SinglePitch = ({ pitch }) => {
  return (
    <div className="overflow-x-auto max-h-50vh">
      <table
        data-theme="business"
        className="table table-lg w-full table-fixed border-collapse border border-orange-800"
      >
        <thead>
          <tr className="text-center">
            <th className="bg-orange-500 text-black text-lg"  colSpan={2}>Pitch Details (selected)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td className="border border-orange-500">Strike Zone (Top)</td>
            <td className="border border-orange-500">
              {pitch && pitch.sz_top
                ? parseFloat(pitch.sz_top).toFixed(2) + " FT"
                : "N/A"}
            </td>
          </tr>
          <tr className="hover">
            <td className="border border-orange-500">Strike Zone (Top)</td>
            <td className="border border-orange-500">
              {pitch && pitch.sz_top
                ? parseFloat(pitch.sz_top).toFixed(2) + " FT"
                : "N/A"}
            </td>
          </tr>
          <tr className="hover">
            <td className="border border-orange-500">Strike Zone (Bottom)</td>
            <td className="border border-orange-500">
              {pitch && pitch.sz_bottom
                ? parseFloat(pitch.sz_bottom).toFixed(2) + " FT"
                : "N/A"}
            </td>
          </tr>
          <tr className="hover">
            <td className="border border-orange-500">Pitch Speed at Release</td>
            <td className="border border-orange-500">
              {pitch && pitch.initial_speed
                ? parseFloat(pitch.initial_speed).toFixed(0) + " MPH"
                : "N/A"}
            </td>
          </tr>
          <tr className="hover">
            <td className="border border-orange-500">
              Initial Position (Ball position at release in pitcher's hand)
            </td>
            <td className="border border-orange-500">
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
          <tr className="hover">
            <td className="border border-orange-500">Initial Velocity</td>
            <td className="border border-orange-500">
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
          <tr className="hover">
            <td className="border border-orange-500">Initial Acceleration</td>
            <td className="border border-orange-500">
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
          <tr className="hover">
            <td className="border border-orange-500">Plate Speed (Speed of ball when crossing plate)</td>
            <td className="border border-orange-500">
              {pitch && pitch.plate_speed
                ? parseFloat(pitch.plate_speed).toFixed(2) + " MPH"
                : "N/A"}
            </td>
          </tr>
          <tr className="hover">
            <td className="border border-orange-500">Position at Plate</td>
            <td className="border border-orange-500">
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
    </div>
  );
};

export default SinglePitch;
