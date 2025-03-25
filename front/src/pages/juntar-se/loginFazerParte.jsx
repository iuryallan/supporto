import './loginfazerparte.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function LoginFazerParte () {
    const navigate = useNavigate();

    return (
        <div className="login">
            <div className='container-login-fazer-parte'>
                <form>
                    <h2 className='titulo-login-fazer-parte'>De qual forma você quer fazer parte da nossa comunidade?</h2>
                    <div className='button-login-fazer-parte'>
                        <input type="submit" value="quero ajuda psicológica" onClick={() => navigate("/cadastro/paciente")}/>
                    </div>
                    <div className='button-login-fazer-parte'>
                        <input type="submit" value="quero atuar como profissional" onClick={() => navigate("/cadastro/profissional")}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginFazerParte;