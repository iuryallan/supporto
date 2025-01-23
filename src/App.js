import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Hero from './components/hero'
import AboutUs from './components/AboutUs'
import Duvidas from './components/duvidas'
import Avaliacao from './components/avaliacao'
import Footer from './components/footer'
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Avaliacao/>
      <Duvidas/>
      <Footer/>
      <Profile/>
    </>
  );
}

export default App;
