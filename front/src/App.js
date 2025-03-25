import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/HomePaciente";
import HomeProf from "./pages/home/HomeProfissional"
import Agendamento from "./pages/agendamento/AgendPaciente";
import AgendamentoProfissional from "./pages/agendamento/AgendProfissional";
import User from "./pages/profiles/userProfile";
import ClientProfile from "./pages/profiles/clientProfile";
import PacientProfile from "./pages/profiles/pacientProfile";
import Lobby from "./pages/lobby/Lobby";
import Login from "./pages/login/login";
import JuntarSe from "./pages/juntar-se/loginFazerParte";
import LoginPaciente from "./pages/juntar-se/paciente/loginPaciente";
import LoginProfissional from "./pages/juntar-se/profissional/loginProfissional";
import Calendario from "./pages/calendar/Calendario";
import GrupoApoio from "./pages/Grupo-de-apoio/grupoApoio";
import RegistrarEvolucao from "./pages/evolucao-clinica/registro";
import RelatorioIndividual from "./pages/evolucao-clinica/relatorio";
import Avaliacao from "./pages/avaliacao-atendimento/Avaliacao";
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
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/cadastro" element={<JuntarSe />} />
        <Route path="/cadastro/paciente" element={<LoginPaciente />} />
        <Route path="/cadastro/profissional" element={<LoginProfissional />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/HomeProfissional" element={<HomeProf />} />
        <Route path="/User" element={<User />} />
        <Route path="/ClientProfile" element={<ClientProfile />} />
        <Route path="/PacientProfile" element={<PacientProfile />} />
        <Route path="/Agendamento" element={<Agendamento />} />
        <Route path="/AgendamentoProfissional" element={<AgendamentoProfissional />} />
        <Route path="/Avaliacao" element={<Avaliacao />} />
        <Route path="/GrupoApoio" element={<GrupoApoio />} />
        <Route path="/Calendario" element={<Calendario />} />
        <Route path="/RegistrarEvolucao" element={<RegistrarEvolucao />} />
        <Route path="/RelatorioIndividual" element={<RelatorioIndividual />} />
      </Routes>
    </Router>
  );
}

export default App;
