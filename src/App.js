import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Hero from './components/hero'
import AboutUs from './components/AboutUs'
import Duvidas from './components/duvidas'
import Avaliacao from './components/avaliacao'
import Footer from './components/footer'
function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Avaliacao/>
      <Duvidas/>
      <Footer/>
    </>
  );
}

export default App;
