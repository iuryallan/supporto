import './buttons-login.css'


function ButtonLogin(props){
    return(
        <div className='button-login'>
            <input type={props.type} value={props.value} />
        </div>
    )
}

export default ButtonLogin;