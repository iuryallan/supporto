import './time.css';

function TimePicker(props) {
    return (
        <div className='card-time'>
            <p>{props.time}</p>
        </div>
    )
}

export default TimePicker;