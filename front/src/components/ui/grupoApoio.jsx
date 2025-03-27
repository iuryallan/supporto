import './grupoApoio.css'
function grupoApoio({nome,linkGroup}){

  return (
    <div className="container-grupos">
      <div className="group-name">
          <box-icon name='group' type='solid' flip='horizontal' animation='tada' color='#799949'></box-icon>
          <p>{nome}</p>
      </div>
      <div className='linkForGroup'>
        <a href={`${linkGroup}`} target='_blank'>
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
      </div>
    </div>
  )
}
export default grupoApoio;