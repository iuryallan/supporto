import ButtonLogin from '../../../components/ui/ButtonsLogin';
import '../../login/login.css';
import { useState } from "react";

function LoginPaciente () {
const [senha, setSenha] = useState("");
const [confirmaSenha, setConfirmaSenha] = useState("");
const [erroSenha, setErroSenha] = useState("");
const [erroIdade, setErroIdade] = useState("");
const [erroQueixa, setErroQueixa] = useState("");
const [erroMotivo, setErroMotivo] = useState("");
const [erroMedicamentos, setErroMedicamentos] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      erroSenha ||
      erroIdade ||
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
                            genêro: <br />
                            <select name="gênero">
                                <option value="Prefiro não informar">Prefiro não informar</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </label>
                    </div>
                    <div className='input-field'>
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
                            Você tem algum histórico disso na família? <br />
                            <select name="Você tem algum histórico disso na família?">
                                <option value="Sim">Sim</option>
                                <option value="Nao">Não</option>
                            </select>
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Você faz uso de medicamentos? <br />
                            <select name="Você faz uso de medicamentos?">
                                <option value="Sim">Sim</option>
                                <option value="Nao">Não</option>
                            </select>
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            Se sim, quais medicamentos? <br />
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
                            e-mail: <br />
                            <input type="email" name="e-mail" required />
                        </label>
                    </div>
                    <div className='input-field'>
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
                    <div className='input-field'>
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
                    <ButtonLogin type="submit" value="enviar informações"/>
                </form>
            </div>
        </div>
    )
}

export default LoginPaciente;