import './loginfazerparte.css';

function loginFazerParte () {
    return (
        <div className='container-login-fazer-parte'>
            <form>
                <h2 className='titulo-login-fazer-parte'>De qual forma você quer fazer parte da nossa comunidade?</h2>
                <div className='button-login-fazer-parte'>
                    <input type="submit" value="quero ajuda psicológica" />
                </div>
                <div className='button-login-fazer-parte'>
                    <input type="submit" value="quero atuar como profissional" />
                </div>
            </form>
        </div>
    )
}

export default loginFazerParte;