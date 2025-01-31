import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Agendamento from "./pages/agendamento/agendamento";
import User from './pages/profiles/userProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/User' element={<User />} />
        <Route path='/Agendamento' element={<Agendamento />} />
      </Routes>
    </Router>
  );
}

export default App;
