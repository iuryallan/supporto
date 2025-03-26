import ButtonLogin from "../../../components/ui/ButtonsLogin";
import "../../login/login.css";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../../services/usuarioService';

function LoginProfissional() {
  const [erroSenha, setErroSenha] = useState("");
  const [erroIdade, setErroIdade] = useState("");
  const [erroValorAtendimento, setErroValorAtendimento] = useState("");
  const [erroAtendimentosGratuitos, setErroAtendimentosGratuitos] = useState("");
  const [erroEspecialidade, setErroEspecialidade] = useState("");
  const [erroRegistroProfissional, setErroRegistroProfissional] = useState("");
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    senha: '',
    confirmaSenha: '',
    nome: '',
    matricula_profissional: '',
    especialidade: '',
    foto_perfil: null,
    quant_atend_gratis: '',
    faixas_etarias: [],
    cidade: '',
    estado: '',
    genero: '',
    idade: '',
    valor: ''
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
        const estadosOrdenados = data.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(estadosOrdenados);
      });
  }, []);

  useEffect(() => {
    if (estadoSelecionado) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
        .then((response) => response.json())
        .then((data) => {
          const cidadesOrdenadas = data.sort((a, b) => a.nome.localeCompare(b.nome));
          setCidades(cidadesOrdenadas);
        });
    } else {
      setCidades([]);
    }
  }, [estadoSelecionado]);

  const validarRegistroProfissional = (valor) => {
    const valorFormatado = valor.trim();
    return [5, 7, 8].includes(valorFormatado.length);
  };

  const handleEstadoChange = (e) => {
    const estadoSigla = e.target.value;
    setEstadoSelecionado(estadoSigla);
    setForm(prev => ({ ...prev, estado: estadoSigla, cidade: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validações
    if (form.senha !== form.confirmaSenha) {
      setErroSenha("As senhas não coincidem");
      return;
    }
    
    if (!validarRegistroProfissional(form.matricula_profissional)) {
      setErroRegistroProfissional("Registro profissional inválido");
      return;
    }

    if (form.idade < 18) {
      setErroIdade("Idade mínima 18 anos");
      return;
    }

    const formData = new FormData();
    for (const key in form) {
      if (key === 'faixas_etarias') {
        formData.append(key, JSON.stringify(form[key]));
      } else if (key === 'foto_perfil' && form[key]) {
        formData.append(key, form[key]);
      } else {
        formData.append(key, form[key]);
      }
    }
    formData.append('tipo', 'PROFISSIONAL');

    try {
      await cadastrarUsuario(formData);
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className="login">
      <div className="container-login">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="titulo-login">Informações Pessoais</h2>

          <div className="input-field">
            <label>
              Nome Completo:
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
              Gênero:
              <select
                name="genero"
                value={form.genero}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </label>
          </div>

          <div className="input-field">
            <label>
              Idade:
              <input
                type="number"
                name="idade"
                value={form.idade}
                onChange={handleChange}
                min="18"
                required
              />
              {erroIdade && <span className="erro">{erroIdade}</span>}
            </label>
          </div>

          <div className="input-field">
            <label>
              Estado:
              <select
                name="estado"
                value={estadoSelecionado}
                onChange={handleEstadoChange}
                required
              >
                <option value="">Selecione</option>
                {estados.map(estado => (
                  <option key={estado.id} value={estado.sigla}>
                    {estado.nome}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {estadoSelecionado && (
            <div className="input-field">
              <label>
                Cidade:
                <select
                  name="cidade"
                  value={form.cidade}
                  onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                  required
                >
                  <option value="">Selecione</option>
                  {cidades.map(cidade => (
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
              Registro Profissional (CRP/RQE):
              <input
                type="text"
                name="matricula_profissional"
                value={form.matricula_profissional}
                onChange={handleChange}
                required
              />
              {erroRegistroProfissional && <span className="erro">{erroRegistroProfissional}</span>}
            </label>
          </div>

          <div className="input-field">
            <label>
              Especialidade:
              <input
                type="text"
                name="especialidade"
                value={form.especialidade}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="input-field">
            <fieldset>
              <legend>Faixas Etárias Atendidas:</legend>
              {opcoesFaixaEtaria.map(faixa => (
                <label key={faixa}>
                  <input
                    type="checkbox"
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
              Valor do Atendimento (R$):
              <input
                type="number"
                name="valor"
                value={form.valor}
                onChange={handleChange}
                step="0.01"
                required
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Atendimentos Gratuitos Oferecidos:
              <input
                type="number"
                name="quant_atend_gratis"
                value={form.quant_atend_gratis}
                onChange={handleChange}
                min="0"
                required
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Foto de Perfil:
              <input
                type="file"
                name="foto_perfil"
                onChange={(e) => setForm({ ...form, foto_perfil: e.target.files[0] })}
                accept="image/*"
              />
            </label>
          </div>

          <h4 className="titulo-login">Dados de Acesso</h4>

          <div className="input-field">
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Senha:
              <input
                type="password"
                name="senha"
                value={form.senha}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Confirmar Senha:
              <input
                type="password"
                name="confirmaSenha"
                value={form.confirmaSenha}
                onChange={handleChange}
                required
              />
              {erroSenha && <span className="erro">{erroSenha}</span>}
            </label>
          </div>

          <ButtonLogin type="submit" value="Finalizar Cadastro" />
        </form>
      </div>
    </div>
  );
}

export default LoginProfissional;