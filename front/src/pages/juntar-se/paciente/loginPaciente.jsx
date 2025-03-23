import ButtonLogin from "../../../components/ui/ButtonsLogin";
import "../../login/login.css";
import { useState } from "react";
import axios from "axios";

function LoginPaciente() {
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const [rqe, setRqe] = useState("");
  const [crp, setCrp] = useState("");
  const [erroRqe, setErroRqe] = useState("");
  const [erroCrp, setErroCrp] = useState("");

  // Validações separadas
  const validarCRP = (valor) => {
    const valorFormatado = valor.replace(/\D/g, "");
    return valorFormatado.length === 7 || valorFormatado.length === 8;
  };

  const validarRQE = (valor) => {
    const valorFormatado = valor.replace(/\D/g, "");
    return valorFormatado.length === 5;
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleConfirmaSenhaChange = (e) => {
    setConfirmaSenha(e.target.value);
  };

  const handleRqeChange = (e) => {
    const valor = e.target.value.replace(/\D/g, "");
    setRqe(valor);
  };

  const handleCrpChange = (e) => {
    const valor = e.target.value.replace(/\D/g, "");
    setCrp(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Resetar erros
    setErroSenha("");
    setErroRqe("");
    setErroCrp("");

    // Validar senhas
    if (senha !== confirmaSenha) {
      setErroSenha("As senhas não coincidem.");
      return;
    }

    // Validar RQE
    if (!validarRQE(rqe)) {
      setErroRqe("RQE deve ter exatamente 5 dígitos");
      console.log("RQE inválido!", rqe);
      return;
    }

    // Validar CRP
    if (!validarCRP(crp)) {
      setErroCrp("CRP deve ter 7 ou 8 dígitos");
      console.log("CRP inválido!", crp);
      return;
    }

    // Se todas as validações passarem
    console.log("Dados válidos - CRP:", crp, "RQE:", rqe);
    // Aqui você pode adicionar o envio para o backend
  };

  return (
    <div className="login">
      <div className="container-login">
        <form onSubmit={handleSubmit}>
          {/* ... (mantenha o restante do JSX igual) ... */}

          <div className="input-field">
            <label>
              RQE: <br />
              <input
                type="text"
                name="rqe"
                value={rqe}
                onChange={handleRqeChange}
                required
                maxLength={5} // Adicionei limitação de caracteres
              />
            </label>
          </div>
          {erroRqe && <p style={{ color: "red" }}>{erroRqe}</p>}

          <div className="input-field">
            <label>
              CRP: <br />
              <input
                type="text"
                name="crp"
                value={crp}
                onChange={handleCrpChange}
                required
                maxLength={8} // Adicionei limitação de caracteres
              />
            </label>
          </div>
          {erroCrp && <p style={{ color: "red" }}>{erroCrp}</p>}

          <ButtonLogin type="submit" value="enviar informações" />
        </form>
      </div>
    </div>
  );
}

export default LoginPaciente;