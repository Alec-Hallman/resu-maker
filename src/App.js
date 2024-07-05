import logo from "./logo.svg";
import "./App.css";
import Appbar from "./Components/AppBar";
import { useState } from "react";
import MainMenu from "./Components/MainMenu";

function App() {
  const [displayMain, setDisplay] = useState(true);
  return (
    <div className="App-header">
      <Appbar></Appbar>
      <MainMenu></MainMenu>
    </div>
  );
}

export default App;
