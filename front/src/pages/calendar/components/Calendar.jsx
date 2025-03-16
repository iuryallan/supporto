import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import TimePicker from './Time';

function ReactCalendar() {
  const horarios = {
    0: [],
    1: ['7:00', '8:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    2: ['7:00', '8:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    3: ['7:00', '8:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    4: ['7:00', '8:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    5: ['7:00', '8:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    6: ['7:00', '8:00', '9:00', '10:00', '11:00'],
  };

  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState("");

  const handleDateChange = (date) => {
    setDataSelecionada(date);
    const diaSemana = date.getDay();
    setHorariosDisponiveis(horarios[diaSemana] || []);
    setHorarioSelecionado("");
  };

  const handleTimeSelect = (time) => {
    setHorarioSelecionado(time);
  };

  // Função para formatar a data
  const formatarData = (data) => {
    return data.toLocaleDateString('pt-BR', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };

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
          onClickDay={handleDateChange}
        />
      </div>
      <div className='time-section'>
        {horariosDisponiveis.length > 0 ? (
          horariosDisponiveis.map((hora) => (
            <TimePicker
              key={hora}
              time={hora}
              onTimeSelect={handleTimeSelect}
              selectedTime={horarioSelecionado}
            />
          ))
        ) : (
          <p>Não há horários disponíveis para esta data.</p>
        )}
      </div>
      
      {horarioSelecionado && (
        <div className='dataSelecionada'>
          <div>
            <h3>horario: </h3>
            <p>{horarioSelecionado}</p>
          </div>
          <div>
            <h3>data: </h3> 
            <p>{formatarData(dataSelecionada)}</p>
          </div>
        </div>
      )}
      <div>
        <button className='agend-button'>Agendar</button>
      </div>
    </div>
  );
}

export default ReactCalendar;
