import ButtonLogin from '../../../components/ui/ButtonsLogin';
import '../../login/login.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../../services/usuarioService';

function LoginPaciente () {
const [erroSenha, setErroSenha] = useState("");

const navigate = useNavigate();
const [form, setForm] = useState({
    email: '', senha: '', confirmaSenha: '',
    nome: '', genero: '', data_nasc: '', motivo_terapia: '',
    medicamentos: '', historico_familiar: '', principal_queixa: '',
    email_contato: ''
});

const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
    e.preventDefault();

    const { confirmaSenha, data_nasc, ...dados } = form;
    const data_nasc_iso = new Date(data_nasc).toISOString();

    if (erroSenha) {
        alert("Por favor, corrija os erros antes de enviar o formulário.");
        return;
    }

    if (form.senha !== form.confirmaSenha) {
        setErroSenha("As senhas não coincidem.");
        return;
    }

    setErroSenha("");
    alert("Formulário enviado com sucesso!");

    try {
        await cadastrarUsuario({ tipo: "PACIENTE", ...dados, senha: form.senha, data_nasc: data_nasc_iso });
        alert("Usuário cadastrado com sucesso!");
        setForm({
          email: '', senha: '', confirmaSenha: '',
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
                            <input 
                                type="name" 
                                name="nome" 
                                value={form.nome}
                                onChange={handleChange}
                                required 
                            />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Gênero: <br />
                            <select name="genero" value={form.genero} onChange={handleChange}>
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
                                name="data_nasc"
                                value={form.data_nasc}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            E-mail para contato: <br />
                            <input  
                                type="email"
                                name="email_contato"
                                placeholder='por onde o profissional entrará em contato'
                                value={form.email_contato}
                                onChange={handleChange}
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
                            name="principal_queixa"
                            value={form.principal_queixa}
                            onChange={handleChange}
                            required 
                            />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Qual o histórico de saúde mental na sua familia? <br />
                            <input 
                              type="text"
                              name="historico_familiar"
                              value={form.historico_familiar}
                              onChange={handleChange}
                              required 
                            />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Você faz uso de medicamentos? Se sim, quais? <br />
                            <input 
                            type="text"
                            name="medicamentos"
                            value={form.medicamentos}
                            onChange={handleChange}
                            required 
                            />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Motivo de buscar terapia: <br />
                            <input 
                            type="text"
                            name="motivo_terapia"
                            value={form.motivo_terapia}
                            onChange={handleChange}
                            required 
                            />
                        </label>
                    </div>
                    <h4 className='titulo-login'>Informações de Login</h4>
                    <div className='input-field'>
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
                            onChange={handleChange}
                            required 
                            />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Confirme sua senha: <br />
                            <input 
                            type="password"
                            name="confirmaSenha"
                            value={form.confirmaSenha}
                            onChange={handleChange}
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