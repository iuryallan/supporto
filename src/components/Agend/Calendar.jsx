import Calendar from 'react-calendar';
import './calendar.css';
import TimePicker from './Time';

function ReactCalendar () {
    return (
        <div className='container-agend'>
            <div className='title-container'>
                <h2>Agende aqui</h2>
            </div>
            <div>
                <Calendar
                    minDate={new Date()}
                    className='react-calendar'
                    view='month'
                    onClickDay={(date) => console.log(date)}
                />
            </div>
            <div className='time-section'>
                <TimePicker time='7:00'/>
                <TimePicker time='8:00'/>
                <TimePicker time='9:00'/>
                <TimePicker time='10:00'/>
                <TimePicker time='13:00'/>
                <TimePicker time='14:00'/>
                <TimePicker time='15:00'/>
                <TimePicker time='16:00'/>
                <TimePicker time='17:00'/>
                <TimePicker time='18:00'/>
            </div>
            <div>
                <button className='agend-button'>Agendar</button>
            </div>
        </div>
    )
}
export default ReactCalendar;