import ButtonLogin from "../../../components/ui/ButtonsLogin";
import "../../login/login.css";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../../services/usuarioService';

function LoginProfissional() {
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroIdade, setErroIdade] = useState("");
  const [erroValorAtendimento, setErroValorAtendimento] = useState("");
  const [erroAtendimentosGratuitos, setErroAtendimentosGratuitos] =
    useState("");
  const [erroEspecialidade, setErroEspecialidade] = useState("");
  const [matricula_profissional, setRegistroProfissional] = useState("");
  const [erroRegistroProfissional, setErroRegistroProfissional] = useState("");

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [idade, setIdade] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [faixas_etarias, setFaixasEtarias] = useState({
    crianca: false,
    adolescente: false,
    jovemAdulto: false,
    adulto: false,
    idoso: false,
  });
  const [valor, setValorAtendimento] = useState("");
  const [quant_atend_gratis, setQuantidadeAtendimentosGratuitos] =
    useState("");
  const [foto_perfil, setFotoPerfil] = useState(null);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '', senha: '', confirmaSenha: '',
    nome: '', matricula_profissional: '', especialidade: '',
    foto_perfil: '', quant_atend_gratis: '', faixas_etarias: [],
    cidade: '', estado: '', genero: '', idade: '', valor: ''
  });

  const opcoesFaixaEtaria = ["CRIANÇA", "ADOLESCENTE", "JOVEM", "ADULTO", "IDOSO"];

  const handleCheckboxChange = (e, faixa) => {
    if (e.target.checked) {
      setForm({
        ...form,
        faixas_etarias: [...form.faixas_etarias, faixa]
      });
    } else {
      setForm({
        ...form,
        faixas_etarias: form.faixas_etarias.filter(f => f !== faixa)
      });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  const validarRegistroProfissional = (valor) => {
    const valorFormatado = valor.replace(/\D/g, "");
    return (
      valorFormatado.length === 7 ||
      valorFormatado.length === 8 ||
      valorFormatado.length === 5
    );
  };

  const handleEstadoChange = (e) => {
    const estadoSigla = e.target.value;
    setEstadoSelecionado(estadoSigla);
    setCidadeSelecionada(""); // Resetando cidade ao mudar estado

    // Atualizando o form com o estado escolhido
    setForm((prevForm) => ({
      ...prevForm,
      estado: estadoSigla,
      cidade: "", // Resetando cidade no form também
    }));
  };

  const handleCidadeChange = (e) => {
    const cidadeNome = e.target.value;
    setCidadeSelecionada(cidadeNome);

    // Atualizando o form com a cidade escolhida
    setForm((prevForm) => ({
      ...prevForm,
      cidade: cidadeNome,
    }));
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleConfirmaSenhaChange = (e) => {
    setConfirmaSenha(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { confirmarSenha, faixas_etarias, ...resto } = form;

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

    if (!validarRegistroProfissional(matricula_profissional)) {
      setErroRegistroProfissional(
        "Caso você possua CRP, ele precisa ter 7 ou 8 dígitos. Se você possui RQE, ele deve ter exatamente 5 dígitos."
      );
      return;
    }
    console.log("Registro Profissional:", form.registroProfissional, "Tamanho:", form.registroProfissional.length);


    setErroSenha("");
    setErroRegistroProfissional("");
    alert("Formulário enviado com sucesso!");

    try {
      // Criar usuário primeiro, já definindo o tipo como "profissional"
      await cadastrarUsuario({ tipo: "PROFISSIONAL", ...resto, faixas_etarias });
      alert("Usuário cadastrado com sucesso!");
      setForm({
        email: '', senha: '', confirmaSenha: '',
        nome: '', matricula_profissional: '', especialidade: '',
        foto_perfil: '', quant_atend_gratis: '', faixas_etarias: [],
        cidade: '', estado: '', genero: '', idade: '', valor: ''
      });
      navigate('/Login');
    } catch (error) {
      console.error("Erro completo:", error);
      alert(`Erro: ${error.message}`);
    }
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
                value={form.nome}
                onChange={handleChange}                
                required
              />
            </label>
          </div>
          <div className="input-field">
            <label>
              Gênero: <br />
              <select
                name="genero"
                value={form.genero}
                onChange={handleChange}
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
                value={form.idade}
                min="1"
                onChange={handleChange}
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
                name="matricula_profissional"
                value={form.matricula_profissional}
                onChange={handleChange}
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
                value={form.especialidade}
                onChange={handleChange}
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
            <fieldset>
              {opcoesFaixaEtaria.map((faixa) => (
                <label key={faixa} style={{ display: 'block' }}>
                  <input
                    type="checkbox"
                    name="faixas_etarias"
                    value={faixa}
                    checked={form.faixas_etarias.includes(faixa)}
                    onChange={(e) => handleCheckboxChange(e, faixa)}
                  />
                  {faixa}
                </label>
              ))}
            </fieldset>
            
          </div>
          <div className="input-field">
            <label>
              Valor do atendimento: <br />
              <input
                type="number"
                name="valor"
                step="0.01"
                value={form.valor}
                onChange={handleChange}
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
                type="number"
                name="quant_atend_gratis"
                value={form.quant_atend_gratis}
                onChange={handleChange}
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
                value={form.foto_perfil}
                onChange={handleChange}
                accept="image/*"
              />
            </label>
          </div>
          <h4 className='titulo-login'>Informações de Login</h4>
          <div className="input-field">
            <label>
              E-mail: <br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='input-field'>
              <label>
                  Senha: <br />
                  <input 
                  type="password"
                  name="senha"
                  value={form.senha}
                  onChange={(e) => setForm({ ...form, senha: e.target.value })}
                  required 
                  />
              </label>
          </div>
          <div className='input-field'>
              <label>
                  Confirme sua senha: <br />
                  <input 
                  type="password"
                  name="senha"
                  value={form.confirmaSenha}
                  onChange={(e) => setForm({ ...form, confirmaSenha: e.target.value })}
                  required 
                  />
              </label>
          </div>
          {erroSenha && <p style={{ color: "red" }}>{erroSenha}</p>}

          <ButtonLogin type="submit" value="fazer cadastro" />
        </form>
      </div>
    </div>
  );
}

export default LoginProfissional;
