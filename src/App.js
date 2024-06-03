import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people");
        const data = await response.json();
        const results = data.results;
        setData(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Starwars time </h1>
      <ul>
        {" "}
        {data.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
