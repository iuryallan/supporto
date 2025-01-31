import Hero from "../../components/hero/hero"
import AboutUs from "../../components/aboutus/AboutUs"
import Avaliacao from "../../components/avaliacao/avaliacao"
import Duvidas from "../../components/duvidas/duvidas"
import Footer from "../../components/footer/footer"
import Button from "../../components/button/Button"
import "./lobby.css"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Lobby = () =>{

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return(
    <>
      <header className="header-lobby">
          <div>
            <h1 className="title-lobby">
              Supporto
            </h1>
          </div>
          <div className="botoesLogin">
            <Link to="Login"><Button label="Login"/>
            </Link>
            <Link to="JuntarSe"><Button label="Juntar-se"/></Link>
          </div>
      </header>
      <Hero/>
      <AboutUs/>
      <Avaliacao/>
      <Duvidas/>
      <Footer/>
    </>
  )
}

export default Lobby;