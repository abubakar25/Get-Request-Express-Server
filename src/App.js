import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import GetRequestServer from "./GetRequestServer";
import { useHttpClient } from "../src/Hooks/http-hook";
import { AuthContext } from "../src/Hooks/auth-context";

function App() {
  var fetchData;
  const [data, setData] = useState(null);
  const { sendRequest } = useHttpClient();
  const { token } = useContext(AuthContext);

  useEffect(async () => {
    try {
      fetchData = await sendRequest(
        // "http://localhost:3000/GetRequestArrayOfObjects",
        "http://localhost:3000/jsonobject",
        "GET",
        null,
        {
          Authorization: "Bearer " + token,
        }
      );
      // console.log(fetchData);
      setData(fetchData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <GetRequestServer data={data} />
    </div>
  );
}

export default App;
