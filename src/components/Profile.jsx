import './profile.css';
import Star from "../assets/star.svg";
import Location from "../assets/location.svg";
import Ellipse from "../assets/ellipse.svg";

function Profile() {
    return (
        <div className='container-profile'>
            <div className='picture-star'>
                <img src={Star} alt="Imagem de estrela" className='star' />
            </div>
            <div className='name-specialist'>
                <img src={Ellipse} alt="blank" className='profile-pic' />
                <h2>Fulano Martins</h2>
                <h3>Especialista em tal coisa</h3>
            </div>
            <div className='address'>
                <img src={Location} alt="Pin de localização" className='location' />  
                <p>Local</p>
            </div>
            <div className='information'>
                <p>Público Alvo:</p>
                <ul>
                    <li>Crianças</li>
                    <li>Adolescentes</li>
                </ul>
                <p>Quantidade de atendimentos gratuitos: <span>2</span></p>
                <p>Valor do atendimento: <span>R$ 100,00</span></p>
                <p>CRP: <span>XXXXX</span></p>
            </div>
        </div>
    );
}

export default Profile;
