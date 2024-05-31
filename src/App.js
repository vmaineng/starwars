import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships");
        console.log(response.json());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Yo </h1>
    </div>
  );
}

export default App;
