import ButtonLogin from "../../../components/ui/ButtonsLogin";
import "../../login/login.css";
import { useState, useEffect } from "react";

function LoginProfissional() {
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroIdade, setErroIdade] = useState("");
  const [erroValorAtendimento, setErroValorAtendimento] = useState("");
  const [erroAtendimentosGratuitos, setErroAtendimentosGratuitos] = useState("");
  const [erroEspecialidade, setErroEspecialidade] = useState("");

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => response.json())
      .then((data) => {
        const estadosOrdenados = data.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(estadosOrdenados);
      })
      .catch((error) => console.error("Erro ao carregar estados:", error));
  }, []);

  useEffect(() => {
    if (estadoSelecionado) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
        .then((response) => response.json())
        .then((data) => {
          const cidadesOrdenadas = data.sort((a, b) => a.nome.localeCompare(b.nome));
          setCidades(cidadesOrdenadas);
        })
        .catch((error) => console.error("Erro ao carregar cidades:", error));
    } else {
      setCidades([]);
    }
  }, [estadoSelecionado]);

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleConfirmaSenhaChange = (e) => {
    setConfirmaSenha(e.target.value);
  };

  const handleIdadeChange = (e) => {
    const idade = e.target.value;
    if (idade < 1 || isNaN(idade)) {
      setErroIdade("Idade deve ser um número maior que zero.");
    } else {
      setErroIdade("");
    }
  };

  const handleValorAtendimentoChange = (e) => {
    const valor = e.target.value;
    if (valor < 0 || isNaN(valor)) {
      setErroValorAtendimento("Valor deve ser um número igual ou maior que zero.");
    } else {
      setErroValorAtendimento("");
    }
  };

  const handleAtendimentosGratuitosChange = (e) => {
    const quantidade = e.target.value;
    if (quantidade < 0 || isNaN(quantidade)) {
      setErroAtendimentosGratuitos("Quantidade deve ser um número igual ou maior que zero.");
    } else {
      setErroAtendimentosGratuitos("");
    }
  };

  const handleEstadoChange = (e) => {
    const estado = e.target.value;
    setEstadoSelecionado(estado);
  };

  const handleCidadeChange = (e) => {
    const cidade = e.target.value;
  };

  const handleEspecialidadeChange = (e) => {
    const especialidade = e.target.value;
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(especialidade)) {
      setErroEspecialidade("A especialidade deve conter apenas letras.");
    } else {
      setErroEspecialidade("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      erroSenha ||
      erroIdade ||
      erroValorAtendimento ||
      erroAtendimentosGratuitos ||
      erroEspecialidade
    ) {
      alert("Por favor, corrija os erros antes de enviar o formulário.");
      return;
    }

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
              idade: <br />
              <input
                type="number"
                name="idade"
                min="1"
                onChange={handleIdadeChange}
                required
              />
              {erroIdade && <p style={{ color: "red" }}>{erroIdade}</p>}
            </label>
          </div>
          <div className="input-field">
            <label>
              estado: <br />
              <select name="estado" onChange={handleEstadoChange} required>
                <option value="">Selecione um estado</option>
                {estados.map((estado) => (
                  <option key={estado.id} value={estado.sigla}>
                    {estado.nome}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="input-field">
            <label>
              cidade: <br />
              <select name="cidade" onChange={handleCidadeChange} required>
                <option value="">Selecione uma cidade</option>
                {cidades.map((cidade) => (
                  <option key={cidade.id} value={cidade.nome}>
                    {cidade.nome}
                  </option>
                ))}
              </select>
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
              <input
                type="text"
                name="especialidade"
                onChange={handleEspecialidadeChange}
                required
              />
              {erroEspecialidade && <p style={{ color: "red" }}>{erroEspecialidade}</p>}
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
                      <input type="checkbox" name="crianca" id="crianca" />
                    </div>
                    <div className="age-range-option
                    ">
                      <label htmlFor="adolecentes">Adolescentes</label>
                      <input type="checkbox" name="adolecentes" id="adolecentes"/>
                    </div>
                    <div className="age-range-option
                    ">
                      <label htmlFor="jovensAdultos">Jovens Adultos</label>
                      <input type="checkbox" name="jovensAdultos" id="jovensAdultos" />
                    </div>
                    <div className="age-range-option
                    ">
                      <label htmlFor="adultos">Adultos</label>
                      <input type="checkbox" name="adultos" id="adultos" />
                    </div>
                    <div className="age-range-option
                    ">
                      <label htmlFor="idosos">Idosos</label>
                      <input type="checkbox" name="idosos" id="idosos" />
                    </div>
                </div>
            </div>
          </div>

          <div className="input-field">
            <label>
              valor dos atendimentos: <br />
              <input
                type="number"
                name="valorAtendimento"
                min="0"
                onChange={handleValorAtendimentoChange}
                required
              />
              {erroValorAtendimento && <p style={{ color: "red" }}>{erroValorAtendimento}</p>}
            </label>
          </div>
          <div className="input-field">
            <label>
              quantidade de atendimentos gratuitos: <br />
              <input
                type="number"
                name="quantidade de atendimentos gratuitos"
                min="0"
                onChange={handleAtendimentosGratuitosChange}
                required
              />
              {erroAtendimentosGratuitos && <p style={{ color: "red" }}>{erroAtendimentosGratuitos}</p>}
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