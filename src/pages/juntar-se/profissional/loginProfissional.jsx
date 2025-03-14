import ButtonLogin from '../../../components/ui/ButtonsLogin';
import '../../login/login.css';

function loginProfissional () {
    return (
        <div className="login">
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
                    <div className='input-field'>
                        <label>
                            estado: <br />
                            <input type="search" name="estado" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            cidade: <br />
                            <input type="search" name="cidade" required />
                        </label>
                    </div>
                    <h3 className='titulo-login'>Informações Profissionais</h3>
                    <div className='input-field'>
                        <label>
                            CRP: <br />
                            <input type="search" name="CRP" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            especialidade: <br />
                            <input type="text" name="especialidade" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            faixa etária de pacientes: <br />
                            <input type="number" name="faixa etária de pacientes" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            quantidade de atendimentos gratuitos: <br />
                            <input type="number" name="quantidade de atendimentos gratuitos" required />
                        </label>
                    </div>
                    <div className='input-field'>
                        <label>
                            adicione uma foto no seu perfil: <br />
                            <input type="file" name="adicione uma foto no seu perfil" required />
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
        </div>
    )
}

export default loginProfissional;