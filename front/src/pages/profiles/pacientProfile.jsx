import "./pacientProfile";
import Header from "../../components/layout/header/HeaderPaciente";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="container-profile">
          <div className="name-specialist">
            <h2>Fulano Martins</h2>
          </div>
          <div className="information">
            <Link to="/Avaliacao">
              <p> Avalie nossa plataforma! </p>
            </Link>
          </div>
          <button className="agend">Sair</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
