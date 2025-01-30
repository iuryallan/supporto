import ButtonLogin from './ButtonsLogin';
import './login.css';

function login () {
    return (
        <div className='container-login'>
            <form>
                <h2 className='titulo-login'>Login</h2>
                <div className='input-field'>
                    <label>
                        e-mail: <br />
                        <input type="email" name="email" required />
                    </label>
                </div>
                <div className='input-field'>
                    <label> 
                        senha: <br />
                        <input type="password" name="senha" required />
                    </label>
                </div>
                <div className='links-login'>
                    <p>
                        Não possui uma conta ainda? <br />
                        <span><a className='junte-se' href="#">Junte-se a nós!</a></span>
                    </p>
                    <p><a className='esqueci-senha' href="#">Esqueci minha senha</a></p>
                </div>
                <ButtonLogin type="submit" value="fazer login"/>
            </form>
        </div>
    )
}

export default login;