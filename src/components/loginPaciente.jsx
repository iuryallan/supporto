import ButtonLogin from './ButtonsLogin';
import './login.css';

function loginPaciente () {
    return (
        <div className='container-login'>
            <form>
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
                        <input type="number" name="idade" required />
                    </label>
                </div>
                <h3 className='titulo-login'>Informações de Saúde Mental</h3>
                <div className='input-field'>
                    <label>
                        Principal queixa: <br />
                        <input type="text" name="Principal queixa" required />
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
                        <input type="password" name="senha" required />
                    </label>
                </div>
                <div className='input-field'>
                    <label>
                        confirme sua senha: <br />
                        <input type="password" name="senha" required />
                    </label>
                </div>
                <ButtonLogin type="submit" value="enviar informações"/>
            </form>
        </div>
    )
}

export default loginPaciente;