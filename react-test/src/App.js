import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/get")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link">Learn React sjs 정보 {data}</a>
      </header>
    </div>
  );
}

export default App;
