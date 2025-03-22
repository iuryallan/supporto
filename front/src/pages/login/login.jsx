import ButtonLogin from "../../components/ui/ButtonsLogin";
import "./login.css";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="login">
      <div className="container-login">
        <form>
          <h2 className="titulo-login">Login</h2>
          <div className="input-field">
            <label>
              e-mail: <br />
              <input type="email" name="email" required />
            </label>
          </div>
          <div className="input-field">
            <label>
              senha: <br />
              <input type="password" name="senha" required />
            </label>
          </div>
          <div className="links-login">
            <p>
              Não possui uma conta ainda? <br />
              <Link to="/JuntarSe">
                <span className="junte-se"> Junte-se a nós!</span>
              </Link>
            </p>
            <p>
              <a className="esqueci-senha" href="#">
                Esqueci minha senha
              </a>
            </p>
          </div>
          <Link to="/HomeProfissional">
            <ButtonLogin type="submit" value="fazer login" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default login;
