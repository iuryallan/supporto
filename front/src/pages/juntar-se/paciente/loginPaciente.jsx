import ButtonLogin from '../../../components/ui/ButtonsLogin';
import '../../login/login.css';
import { useState } from 'react';
import axios from "axios";

function LoginPaciente () {
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

        setErroSenha(""); // Se estiver certo, limpa o erro
        alert("Formulário enviado com sucesso!");
    };

    return (
        <div className="login">
            <div className='container-login'>
                <form onSubmit={handleSubmit}>
                    <h2 className='titulo-login'>Informações Pessoais</h2>
                    <div className='input-field'>
                        <label>
                            nome: <br />
                            <input type="name" name="nome" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            gênero: <br />
                            <select name="genero">
                                <option value="Prefiro não informar">Prefiro não informar</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            data de nascimento: <br />
                            <input type="date" name="dataNascimento" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            e-mail para contato: <br />
                            <input type="text" name="emailContato" placeholder='e-mail que será visualizado pelo profissional' required />
                        </label>
                    </div>
                    <h3 className='titulo-login'>Informações de Saúde Mental</h3>
                    <div className='input-field'>
                        <label>
                            Principal queixa: <br />
                            <input type="text" name="principalQueixa" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Você tem algum histórico disso na família? Explique<br />
                            <input type="text" name="historicoFamiliar" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Você faz uso de medicamentos para saúde mental? Quais?<br />
                            <input type="text" name="medicamentos" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Motivo de buscar terapia: <br />
                            <input type="text" name="Motivo de buscar terapia" required />
                        </label>
                    </div>
                    <h4 className='titulo-login'>Informações de Login</h4>
                    <div className='input-field'>
                        <label>
                            e-mail: <br />
                            <input type="email" name="e-mail" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            senha: <br />
                            <input type="password" name="senha" value={senha} onChange={handleSenhaChange} required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            confirme sua senha: <br />
                            <input type="password" name="senha" value={confirmaSenha} onChange={handleConfirmaSenhaChange} required />
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