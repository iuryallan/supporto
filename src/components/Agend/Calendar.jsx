import Calendar from 'react-calendar';
import './calendar.css';

function ReactCalendar () {
    return (
        <Calendar 
            minDate={new Date()}
            className='react-calendar' 
            view='month' 
            onClickDay={(date) => console.log(date)}
        />
    )
}
export default ReactCalendar;