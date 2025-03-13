import './time.css';

function TimePicker(props) {
  const isSelected = props.time === props.selectedTime;

  const handleClick = () => {
    props.onTimeSelect(props.time);
  };

  return (
    <div
      className={`card-time ${isSelected ? 'selected-time' : ''}`} 
      onClick={handleClick}
    >
      <p>{props.time}</p>
    </div>
  );
}

export default TimePicker;
