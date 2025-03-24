import ButtonLogin from "../../../components/ui/ButtonsLogin";
import "../../login/login.css";
import { useState, useEffect } from "react";

function LoginProfissional() {
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroIdade, setErroIdade] = useState("");
  const [erroValorAtendimento, setErroValorAtendimento] = useState("");
  const [erroAtendimentosGratuitos, setErroAtendimentosGratuitos] =
    useState("");
  const [erroEspecialidade, setErroEspecialidade] = useState("");
  const [registroProfissional, setRegistroProfissional] = useState("");
  const [erroRegistroProfissional, setErroRegistroProfissional] = useState("");

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [idade, setIdade] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [faixaEtaria, setFaixaEtaria] = useState({
    crianca: false,
    adolescente: false,
    jovemAdulto: false,
    adulto: false,
    idoso: false,
  });
  const [valorAtendimento, setValorAtendimento] = useState("");
  const [quantidadeAtendimentosGratuitos, setQuantidadeAtendimentosGratuitos] =
    useState("");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => response.json())
      .then((data) => {
        const estadosOrdenados = data.sort((a, b) =>
          a.nome.localeCompare(b.nome)
        );
        setEstados(estadosOrdenados);
      })
      .catch((error) => console.error("Erro ao carregar estados:", error));
  }, []);

  useEffect(() => {
    if (estadoSelecionado) {
      fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`
      )
        .then((response) => response.json())
        .then((data) => {
          const cidadesOrdenadas = data.sort((a, b) =>
            a.nome.localeCompare(b.nome)
          );
          setCidades(cidadesOrdenadas);
        })
        .catch((error) => console.error("Erro ao carregar cidades:", error));
    } else {
      setCidades([]);
    }
  }, [estadoSelecionado]);

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

    if (!validarRegistroProfissional(registroProfissional)) {
      setErroRegistroProfissional(
        "Caso você possua CRP, ele precisa ter 7 ou 8 dígitos. Se você possui RQE, ele deve ter exatamente 5 dígitos."
      );
      return;
    }

    setErroSenha("");
    setErroRegistroProfissional("");
    alert("Formulário enviado com sucesso!");

    const dadosProfissional = {
      nome,
      genero,
      idade,
      estado: estadoSelecionado,
      cidade: cidadeSelecionada,
      registroProfissional,
      especialidade,
      faixaEtaria,
      valorAtendimento,
      quantidadeAtendimentosGratuitos,
      fotoPerfil,
      email,
    };

    // Aqui você enviariamos o objeto para o banco
  };

  const validarRegistroProfissional = (valor) => {
    const valorFormatado = valor.replace(/\D/g, "");
    return (
      valorFormatado.length === 7 ||
      valorFormatado.length === 8 ||
      valorFormatado.length === 5
    );
  };

  const handleEstadoChange = (e) => {
    const estado = e.target.value;
    setEstadoSelecionado(estado);
  };

  const handleCidadeChange = (e) => {
    const cidade = e.target.value;
    setCidadeSelecionada(cidade);
  };

  const handleFaixaEtariaChange = (e) => {
    const { name, checked } = e.target;
    setFaixaEtaria((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="login">
      <div className="container-login">
        <form onSubmit={handleSubmit}>
          <h2 className="titulo-login">Informações Pessoais</h2>
          <div className="input-field">
            <label>
              Nome: <br />
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="input-field">
            <label>
              Gênero: <br />
              <select
                name="genero"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                required
              >
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
              Idade: <br />
              <input
                type="number"
                name="idade"
                value={idade}
                min="1"
                onChange={(e) => setIdade(e.target.value)}
                required
              />
              {erroIdade && <p style={{ color: "red" }}>{erroIdade}</p>}
            </label>
          </div>
          <div className="input-field">
            <label>
              Estado: <br />
              <select
                name="estado"
                value={estadoSelecionado}
                onChange={handleEstadoChange}
                required
              >
                <option value="">Selecione um estado</option>
                {estados.map((estado) => (
                  <option key={estado.id} value={estado.sigla}>
                    {estado.nome}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Renderiza a cidade somente se um estado for selecionado */}
          {estadoSelecionado && (
            <div className="input-field">
              <label>
                Cidade: <br />
                <select
                  name="cidade"
                  value={cidadeSelecionada}
                  onChange={handleCidadeChange}
                  required
                >
                  <option value="">Selecione uma cidade</option>
                  {cidades.map((cidade) => (
                    <option key={cidade.id} value={cidade.nome}>
                      {cidade.nome}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}

          <h3 className="titulo-login">Informações Profissionais</h3>
          <div className="input-field">
            <label>
              Registro Profissional (CRP, RQE, etc.): <br />
              <input
                type="text"
                name="registroProfissional"
                value={registroProfissional}
                onChange={(e) => setRegistroProfissional(e.target.value)}
                required
              />
            </label>
            {erroRegistroProfissional && (
              <p style={{ color: "red" }}>{erroRegistroProfissional}</p>
            )}
          </div>
          <div className="input-field">
            <label>
              Especialidade: <br />
              <input
                type="text"
                name="especialidade"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
                required
              />
              {erroEspecialidade && (
                <p style={{ color: "red" }}>{erroEspecialidade}</p>
              )}
            </label>
          </div>

          <div className="input-field">
            <label>
              Faixa etária de pacientes: <br />
            </label>
            <div>
              <div className="container-age-range-option">
                <div className="age-range-option">
                  <label htmlFor="crianca">Crianças</label>
                  <input
                    type="checkbox"
                    name="crianca"
                    id="crianca"
                    checked={faixaEtaria.crianca}
                    onChange={handleFaixaEtariaChange}
                  />
                </div>
                <div className="age-range-option">
                  <label htmlFor="adolescente">Adolescentes</label>
                  <input
                    type="checkbox"
                    name="adolescente"
                    id="adolescente"
                    checked={faixaEtaria.adolescente}
                    onChange={handleFaixaEtariaChange}
                  />
                </div>

                <div className="age-range-option">
                  <label htmlFor="jovens-adultos">Jovens adultos</label>
                  <input
                    type="checkbox"
                    name="jovemAdulto"
                    id="jovens-adultos"
                    checked={faixaEtaria.jovemAdulto}
                    onChange={handleFaixaEtariaChange}
                  />
                </div>
                <div className="age-range-option">
                  <label htmlFor="adultos">Adultos</label>
                  <input
                    type="checkbox"
                    name="adulto"
                    id="adultos"
                    checked={faixaEtaria.adulto}
                    onChange={handleFaixaEtariaChange}
                  />
                </div>
                <div className="age-range-option">
                  <label htmlFor="idosos">Idosos</label>
                  <input
                    type="checkbox"
                    name="idoso"
                    id="idosos"
                    checked={faixaEtaria.idoso}
                    onChange={handleFaixaEtariaChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="input-field">
            <label>
              Valor do atendimento: <br />
              <input
                type="text"
                name="valorAtendimento"
                value={valorAtendimento}
                onChange={(e) => setValorAtendimento(e.target.value)}
                required
              />
            </label>
            {erroValorAtendimento && (
              <p style={{ color: "red" }}>{erroValorAtendimento}</p>
            )}
          </div>

          <div className="input-field">
            <label>
              Quantidade de atendimentos gratuitos: <br />
              <input
                type="text"
                name="quantidadeAtendimentosGratuitos"
                value={quantidadeAtendimentosGratuitos}
                onChange={(e) =>
                  setQuantidadeAtendimentosGratuitos(e.target.value)
                }
                required
              />
            </label>
            {erroAtendimentosGratuitos && (
              <p style={{ color: "red" }}>{erroAtendimentosGratuitos}</p>
            )}
          </div>

          <div className="input-field">
            <label>
              Foto de perfil: <br />
              <input
                type="file"
                name="fotoPerfil"
                onChange={(e) => setFotoPerfil(e.target.files[0])}
                accept="image/*"
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              E-mail: <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>

          <ButtonLogin type="submit" value="fazer cadastro" />
        </form>
      </div>
    </div>
  );
}

export default LoginProfissional;
