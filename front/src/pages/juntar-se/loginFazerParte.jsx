import './loginfazerparte.css';
import { Link } from "react-router-dom";

function loginFazerParte () {
    return (
        <div className="login">
            <div className='container-login-fazer-parte'>
                <form>
                    <h2 className='titulo-login-fazer-parte'>De qual forma você quer fazer parte da nossa comunidade?</h2>
                    <div className='button-login-fazer-parte'>
                        <Link to="/LoginPaciente">
                            <input type="submit" value="quero ajuda psicológica"/>
                        </Link>
                    </div>
                    <div className='button-login-fazer-parte'>
                        <Link to="/LoginProfissional">
                            <input type="submit" value="quero atuar como profissional" />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default loginFazerParte;