import React, { useState } from 'react';

// Props incluem uma função callback onDateChange e placeholders opcionais
const DateRangePicker = ({ onDateChange, startLabel = "Início", endLabel = "Fim" }) => {
  const [dates, setDates] = useState({
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDates = { ...dates, [name]: value };
    setDates(updatedDates);
    // Chama a função callback do componente pai com as novas datas
    onDateChange(updatedDates);
  };

  return (
    <div style={{display: 'block'}}>
      <label>
        {startLabel}:
        <input
          type="date"
          name="startDate"
          value={dates.startDate}
          onChange={handleChange}
        />
      </label><br/>
      <label>
        {endLabel}:
        <input
          type="date"
          name="endDate"
          value={dates.endDate}
          onChange={handleChange}
          style={{fontSize: '12px'}}
        />
      </label>
    </div>
  );
};

export default DateRangePicker;
