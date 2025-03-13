import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Agendamento from "./pages/agendamento/agendamento";
import User from './pages/profiles/userProfile';
import ClientProfile from './pages/profiles/clientProfile'
import Lobby from "./pages/lobby/Lobby"
import Login from "./components/login" 
import JuntarSe from "./components/loginFazerParte" 
import LoginPaciente from "./components/loginPaciente" 
import LoginProfissional from "./components/loginProfissional" 
import Calendario from "./pages/Calendario"
import GrupoApoio from "./pages/Grupo-de-apoio/grupoApoio"
import RegistrarEvolucao from "./pages/EvolucaoClinica/registro"
import RelatorioIndividual from './pages/EvolucaoClinica/relatorio';
import { useEffect } from "react";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHashElement/>
      <Routes>
        <Route path='/' element={<Lobby />}/>
        <Route path='/JuntarSe' element={<JuntarSe/>}/>
        <Route path='/LoginPaciente' element={<LoginPaciente/>}/>
        <Route path='/LoginProfissional' element={<LoginProfissional/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/User' element={<User />}/>
        <Route path='/ClientProfile' element={<ClientProfile/>}/>
        <Route path='/Agendamento' element={<Agendamento />} />
        <Route path='/GrupoApoio' element={<GrupoApoio/>}/>
        <Route path='/Calendario' element={<Calendario/>}/>
        <Route path='/RegistrarEvolucao' element={<RegistrarEvolucao/>}/>
        <Route path='/RelatorioIndividual' element={<RelatorioIndividual/>}/>
      </Routes>
    </Router>
  );
}

export default App;
