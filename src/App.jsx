import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import SinglePitch from "./components/SinglePitch";
import GameDetails from "./components/GameDetails";
import PitchesTable from "./components/PitchesTable";

function App() {
  const [data, setData] = useState(null);
  const [selectedPitch, setSelectedPitch] = useState(null);

  useEffect(() => {
    const getAstrosData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json"
        );
        setData(response.data.queryResults.row);
      } catch (error) {
        console.log(error);
      }
    };
    getAstrosData();
  }, []);

  return (
    <div className="flex bg-zinc-500">
      {data ? (
        <>
          <div className="">
            <PitchesTable data={data} onSelectPitch={setSelectedPitch} />
          </div>
          <div className="flex-col">
            <div className="flex-none ml-4">{selectedPitch && <SinglePitch pitch={selectedPitch} />}</div>
            <div className="flex-none ml-4 mt-2">{selectedPitch && <GameDetails pitch={selectedPitch} />}</div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
