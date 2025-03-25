import Hero from "../lobby/components/hero"
import AboutUs from "../lobby/components/AboutUs"
import Avaliacao from "../lobby/components/avaliacao"
import Duvidas from "../lobby/components/duvidas"
import Footer from "../../components/layout/footer/footer"
import Button from "../lobby/components/Button"
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
            <Link to="cadastro"><Button label="Juntar-se"/></Link>
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