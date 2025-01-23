import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Hero from './components/hero'
import AboutUs from './components/AboutUs'
import Duvidas from './components/duvidas'
import Avaliacao from './components/avaliacao'
import Footer from './components/footer'
import Login from './components/login'
import LoginFazerParte from './components/loginFazerParte'
import LoginPaciente from './components/loginPaciente'
import LoginProfissional from './components/loginProfissional'

function App() {
  return (
    <div className='Login'>
      <Login/>
    </div>
  );
}

export default App;
