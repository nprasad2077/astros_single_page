import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

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

  if (data) {
    console.log(data[0]);
  }

  return (
    <div className="container">
      {data ? <SinglePitch pitch={data[0]} /> : "Loading..."}
    </div>
  );
}

export default App;
