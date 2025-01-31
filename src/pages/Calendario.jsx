import './calendario.css'
import Header from "../components/header/Header";
import Calendar from "../components/Agend/Calendar";

function Calendario(){
    return (
        <>
            <Header/>
            <div className="calendar-block">
                <Calendar/>
            </div>
        </>
    )
}

export default Calendario;