import ButtonLogin from "../../components/ui/ButtonsLogin";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import usuarioService from "../../services/usuarioService";

function Login() {
  // Estado para guardar o email digitado
  const [email, setEmail] = useState("");

  // Estado para guardar a senha digitada
  const [senha, setSenha] = useState("");

  // Estado para mensagens de erro
  const [error, setError] = useState("");

  // Hook para redirecionar o usuário após o login
  const navigate = useNavigate();

  // Função chamada quando o formulário é enviado
  const handleLogin = async (e) => {
    e.preventDefault(); // Evita recarregar a página
    setError(""); // Limpa o erro anterior

    try {
      // Envia o email e senha para o backend e salva o token no localStorage
      await authService.login({ email, senha });

      // Após o login, busca o perfil do usuário
      const response = await usuarioService.getUserProfile();
      const tipo = response.data.tipo; // TIPO1 = admin, TIPO2 = usuário comum

      // Redireciona para a rota certa com base no tipo de usuário
      if (tipo === "PACIENTE") {
        navigate("/Home");
      } else if (tipo === "PROFISSIONAL") {
        navigate("/HomeProfissional"); 
      } else {
        navigate("/Home")
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      setError("Credenciais inválidas"); // Mostra mensagem de erro
    }
  };
  
  return (
    <div className="login">
      <div className="container-login">
        <form onSubmit={handleLogin}>
          <h2 className="titulo-login">Login</h2>
          <div className="input-field">
            <label>
              e-mail: <br />
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
          </div>
          <div className="input-field">
            <label>
              senha: <br />
              <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            </label>
          </div>
          <div className="links-login">
            <p>
              Não possui uma conta ainda? <br />
              <Link to="/cadastro">
                <span className="junte-se"> Junte-se a nós!</span>
              </Link>
            </p>
            <p>
              <a className="esqueci-senha" href="#">
                Esqueci minha senha
              </a>
            </p>
          </div>
          {error && <p className="error">{error}</p>}
          <ButtonLogin type="submit" value="fazer login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
