import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Components
import SinglePitch from "./components/SinglePitch";
import GameDetails from "./components/GameDetails";
import PitchesTable from "./components/PitchesTable";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(null);
  const [selectedPitch, setSelectedPitch] = useState(null);

  useEffect(() => {
    const getAstrosData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json"
        );
        // console.log(response.data.queryResults.row);
        setData(response.data.queryResults.row);
      } catch (error) {
        console.log(error);
      }
    };

    getAstrosData();
  }, []);

  return (
    <>
    <div className="container">
      {data ? (
        <>
          <div className="scroll-table">
            <PitchesTable data={data} onSelectPitch={setSelectedPitch} />
          </div>
          <div className="details-container">
            {selectedPitch && <SinglePitch pitch={selectedPitch} />}
            {selectedPitch && <GameDetails pitch={selectedPitch} />}
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
    </>
  );
}

export default App;
