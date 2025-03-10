import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Agendamento from "./pages/agendamento/agendamento"

function App() {
  return (
    <>
    
      {/* <Home/> */}
      <Agendamento/>
    </>
  );
}

export default App;
