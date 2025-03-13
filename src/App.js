import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Agendamento from "./pages/agendamento/agendamento";
import Profile from "./pages/profiles/clientProfile";
import User from "./pages/profiles/userProfile";
import RateUser from "./pages/Rate/Rate";

function App() {
  return (
    <>
    
      {/* <Home/> */}
      {/* <Agendamento/> */}
      <RateUser />
    </>
  );
}

export default App;
