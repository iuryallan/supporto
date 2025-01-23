import './profile.css';
import Star from "../assets/star.svg";

function Profile () {
    return (
        <div className='container-profile'>
            <div className='picture-star'>
                <img src="" alt="" />
                <ion-icon name="star"></ion-icon>
            </div>
            <div className='name-specialist'>
                <h2>Fulano</h2>
                <h3>Especialista em tal coisa</h3>
            </div>
            <div className='address'>
                {/* svg local */}
                <ion-icon name="star"></ion-icon>
                <p>Local</p>
            </div>
            <div className='information'>
                <p>Público Alvo:</p>
                <ul>
                    <li>Crianças</li>
                    <li>Adolescentes</li>
                </ul>
                <p>Quantidade de atendimentos gratuitos: <span>X</span></p>
                <p>Valor do atendimento: <span>X</span></p>
                <p>CRP: <span>XXXXX</span></p>
            </div>
            <div className='button'>
                {/* botao */}
            </div>
        </div>
    );
}

export default Profile;
