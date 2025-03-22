import "./relatorio.css";
import { useState } from "react";
import DownArrow from "../../assets/down-arrow.svg";
import UpArrow from "../../assets/up-arrow.svg";
import Header from "../../components/layout/header/HeaderPaciente";

function RelatorioIndividual() {
  const [arrow1, setArrow1] = useState(DownArrow);
  const [arrow2, setArrow2] = useState(DownArrow);

  const handleToggle1 = () =>
    setArrow1(arrow1 === DownArrow ? UpArrow : DownArrow);
  const handleToggle2 = () =>
    setArrow2(arrow2 === DownArrow ? UpArrow : DownArrow);

  return (
    <>
      <Header />
      <section id="relatorio" className="secao-relatorio">
        <div className="h2-relatorio">
          <h2>Histórico de Registros</h2>
        </div>

        <div className="registros">
          <details>
            <summary onClick={handleToggle1}>
              <div>00/00/0000</div>
              <div>
                <img src={arrow1} alt="seta para baixo" />
              </div>
            </summary>
            <div className="atendimento-descricao">
              <h3>Relatos do Atendimento</h3>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <h3>Ajustes no Tratamento</h3>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </details>

          <details>
            <summary onClick={handleToggle1}>
              <div>00/00/0000</div>
              <div>
                <img src={arrow1} alt="seta para baixo" />
              </div>
            </summary>
            <div className="atendimento-descricao">
              <h3>Relatos do Atendimento</h3>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <h3>Ajustes no Tratamento</h3>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}

export default RelatorioIndividual;
