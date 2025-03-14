import './calendario.css'
import Header from "../../components/layout/header/Header";
import Calendar from "./components/Calendar";

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