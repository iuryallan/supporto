import ButtonLogin from '../../../components/ui/ButtonsLogin';
import '../../login/login.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../../services/usuarioService';

function LoginPaciente () {
const [senha, setSenha] = useState("");
const [confirmaSenha, setConfirmaSenha] = useState("");
const [erroSenha, setErroSenha] = useState("");
const [erroQueixa, setErroQueixa] = useState("");
const [erroMotivo, setErroMotivo] = useState("");
const [erroMedicamentos, setErroMedicamentos] = useState("");

const navigate = useNavigate();
const [form, setForm] = useState({
    email: '', senha: '', confirmarSenha: '',
    nome: '', genero: '', data_nasc: '', motivo_terapia: '',
    medicamentos: '', historico_familiar: '', principal_queixa: '',
    email_contato: ''
});

const handleSenhaChange = (e) => {
    setSenha(e.target.value);
};

const handleConfirmaSenhaChange = (e) => {
    setConfirmaSenha(e.target.value);
};

const handleQueixaChange = (e) => {
    const queixa = e.target.value;
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (!regex.test(queixa)) {
        setErroQueixa("O campo referido deve conter apenas palavras.");
    } else {
        setErroQueixa("");
    }
};

const handleMotivoChange = (e) => {
    const motivo = e.target.value;
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (!regex.test(motivo)) {
        setErroMotivo("O campo referido deve conter apenas palavras.");
    } else {
        setErroMotivo("");
    }
};

const handleMedicamentosChange = (e) => {
    const medicamentos = e.target.value;
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (!regex.test(medicamentos)) {
        setErroMedicamentos("O campo referido deve conter apenas palavras.");
    } else {
        setErroMedicamentos("");
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();

    const { confirmarSenha, data_nasc, ...dados } = form;
    const data_nasc_iso = new Date(data_nasc).toISOString();

    if (
        erroSenha ||
        erroQueixa ||
        erroMotivo ||
        erroMedicamentos
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

    try {
        await cadastrarUsuario({ tipo: "PACIENTE", ...dados, data_nasc: data_nasc_iso });
        alert("Usuário cadastrado com sucesso!");
        setForm({
          email: '', senha: '', confirmarSenha: '',
          nome: '', genero: '', data_nasc: '', motivo_terapia: '',
          medicamentos: '', historico_familiar: '', principal_queixa: '',
          email_contato: ''
        });
        navigate('/Login');
      } catch (error) {
        alert("Erro ao cadastrar usuário.");
    }
};

    return (
        <div className="login">
            <div className='container-login'>
                <form onSubmit={handleSubmit}>
                    <h2 className='titulo-login'>Informações Pessoais</h2>
                    <div className='input-field'>
                        <label>
                            Nome: <br />
                            <input type="name" name="nome" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Gênero: <br />
                            <select name="gênero">
                                <option value="Prefiro não informar">Prefiro não informar</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Data de nascimento: <br />
                            <input  
                                type="date"
                                name="dataNascimento"
                                required
                            />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            E-mail para contato: <br />
                            <input  
                                type="email"
                                name="emailContato"
                                placeholder='por onde o profissional entrará em contato'
                                required
                            />
                        </label>
                    </div>
                    <h3 className='titulo-login'>Informações de Saúde Mental</h3>
                    <div className='input-field'>
                        <label>
                            Principal queixa: <br />
                            <input 
                            type="text"
                            name="queixa"
                            onChange={handleQueixaChange}
                            required 
                            />
                            {erroQueixa && <p style={{ color: "red" }}>{erroQueixa}</p>}
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Qual o histórico de saúde mental na sua familia? <br />
                            <input 
                              type="text"
                              name="historicoFamiliar"
                              required 
                            />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Você faz uso de medicamentos? Se sim, quais? <br />
                            <input 
                            type="text"
                            name="motivo"
                            onChange={handleMedicamentosChange}
                            required 
                            />
                            {erroMedicamentos && <p style={{ color: "red" }}>{erroMedicamentos}</p>}
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Motivo de buscar terapia: <br />
                            <input 
                            type="text"
                            name="motivo"
                            onChange={handleMotivoChange}
                            required 
                            />
                            {erroMotivo && <p style={{ color: "red" }}>{erroMotivo}</p>}
                        </label>
                    </div>
                    <h4 className='titulo-login'>Informações de Login</h4>
                    <div className='input-field'>
                        <label>
                            E-mail: <br />
                            <input type="email" name="e-mail" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Senha: <br />
                            <input 
                            type="password"
                            name="senha"
                            value={senha}
                            onChange={handleSenhaChange}
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
                            value={confirmaSenha}
                            onChange={handleConfirmaSenhaChange}
                            required 
                            />
                        </label>
                    </div>
                    {erroSenha && <p style={{ color: "red" }}>{erroSenha}</p>}
                    <ButtonLogin type="submit" value="enviar informações"/>
                </form>
            </div>
        </div>
    )
}

export default LoginPaciente;