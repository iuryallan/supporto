import './App.css';
import Header from './components/header/Header'
import Hero from './components/hero/hero'
import AboutUs from './components/aboutus/AboutUs'
import Duvidas from './components/duvidas/duvidas'
import Avaliacao from './components/avaliacao/avaliacao'
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Agendamento from "./pages/agendamento/agendamento"


function App() {
  return (
    <>
      <Home/>
      {/* <Agendamento/> */}
    </>
  );
}

export default App;
