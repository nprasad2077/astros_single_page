import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import SinglePitch from "./components/SinglePitch";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getAstrosData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json"
        );
        console.log(response.data.queryResults.row);
        setData(response.data.queryResults.row);
      } catch (error) {
        console.log(error);
      }
    };

    getAstrosData();
  }, []);

  console.log(data[0]);

  return (
    <div>
      <SinglePitch pitch={data[0]} />
    </div>
  );
}

export default App;
