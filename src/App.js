import logo from "./logo.svg";
import "./App.css"; // Import the CSS file
import KanbanBoard from "./Components/KanbanBoard";
import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState({});

  const fetchApi = async () => {
    // API call logic here
    const res = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await res.json();
    console.log(data);
    
    setApiData(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <KanbanBoard Data={apiData} />
    </div>
  );
}

export default App;
