import ButtonLogin from "../../../components/ui/ButtonsLogin";
import "../../login/login.css";
import { useState } from "react";

function LoginProfissional() {
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleConfirmaSenhaChange = (e) => {
    setConfirmaSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      setErroSenha("As senhas não coincidem.");
      return;
    }

    setErroSenha("");
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="login">
      <div className="container-login">
        <form onSubmit={handleSubmit}>
          <h2 className="titulo-login">Informações Pessoais</h2>
          <div className="input-field">
            <label>
              nome: <br />
              <input type="name" name="nome" required />
            </label>
          </div>
          <div className="input-field">
            <label>
              gênero: <br />
              <select name="genero" required>
                <option value="Prefiro não informar">
                  Prefiro não informar
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </label>
          </div>
          <div className="input-field">
            <label>
              data de nascimento: <br />
              <input type="date" name="dataNascimento" required />
            </label>
          </div>
          <div className="input-field">
            <label>
              estado: <br />
              <input type="search" name="estado" required />
            </label>
          </div>
          <div className="input-field">
            <label>
              cidade: <br />
              <input type="search" name="cidade" required />
            </label>
          </div>
          <h3 className="titulo-login">Informações Profissionais</h3>
          <div className="input-field">
            <label>
              registro profissional (CRP, RQE, etc.): <br />
              <input type="search" name="CRP" required />
            </label>
          </div>
          <div className="input-field">
            <label>
              especialidade: <br />
              <input type="text" name="especialidade" required />
            </label>
          </div>

          <div className="input-field">
            <label>
              faixa etária de pacientes: <br />
            </label>

            <div>
                <div className="container-age-range-option">
                    <div className="age-range-option
                    ">
                      <label htmlFor="crianca">Crianças</label>
                      <input type="radio" name="crianca" id="crianca" />
                    </div>
                    <div className="age-range-option
                    ">
                      <label htmlFor="adolecentes">Adolescentes</label>
                      <input type="radio" name="adolecentes" id="adolecentes"/>
                    </div>
                    <div className="age-range-option
                    ">
                      <label htmlFor="jovensAdultos">Jovens Adultos</label>
                      <input type="radio" name="jovensAdultos" id="jovensAdultos" />
                    </div>
                    <div className="age-range-option
                    ">
                      <label htmlFor="adultos">Adultos</label>
                      <input type="radio" name="adultos" id="adultos" />
                    </div>
                    <div className="age-range-option
                    ">
                      <label htmlFor="idosos">Idosos</label>
                      <input type="radio" name="idosos" id="idosos" />
                    </div>
                </div>
            </div>
          </div>

          <div className="input-field">
            <label>
              valor dos atendimentos: <br />
              <input type="number" name="valorAtendimento" required />
            </label>
          </div>
          <div className="input-field">
            <label>
              quantidade de atendimentos gratuitos: <br />
              <input
                type="number"
                name="quantidade de atendimentos gratuitos"
                required
              />
            </label>
          </div>
          <div className="input-field">
            <label>
              adicione uma foto no seu perfil: <br />
              <input type="file" name="adicione uma foto no seu perfil" />
            </label>
          </div>
          <h4 className="titulo-login">Informações de Login</h4>
          <div className="input-field">
            <label>
              e-mail: <br />
              <input type="email" name="e-mail" required />
            </label>
          </div>
          <div className="input-field">
            <label>
              senha: <br />
              <input
                type="password"
                name="senha"
                value={senha}
                onChange={handleSenhaChange}
                required
              />
            </label>
          </div>
          <div className="input-field">
            <label>
              confirme sua senha: <br />
              <input
                type="password"
                name="senha"
                value={confirmaSenha}
                onChange={handleConfirmaSenhaChange}
                required
              />
            </label>
          </div>
          {erroSenha && <p style={{ color: "red" }}>{erroSenha}</p>}
          <ButtonLogin type="submit" value="enviar informações" />
        </form>
      </div>
    </div>
  );
}

export default LoginProfissional;
