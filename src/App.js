import logo from "./logo.svg";
import "./App.css";
import KanbanBoard from "./Components/KanbanBoard";
import { useEffect, useState } from "react";

function App() {
  const [apiData, setapiData] = useState({});
  const fetchApi = async () => {
    // API call logic here
    const res = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await res.json();
    console.log(data);
    
    setapiData(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App min-h-screen max-w-screen bg-slate-200 overflow-x-hidden">
      <KanbanBoard Data={apiData} />
    </div>
  );
}

export default App;
