import React, { useRef, useState } from 'react';
import { BsCalendar } from 'react-icons/bs'; 

const DateRangePicker = ({ onDateChange, showStartDate = true, showEndDate = true }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    onDateChange({ startDate: newStartDate, endDate });
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    onDateChange({ startDate, endDate: newEndDate });
  };

  return (
    <div style={{display:'flex' }}>
      {showStartDate && (
        <>
          <span onClick={() => startDateRef.current.click()} style={{ cursor: 'pointer', fontSize: '10px' }}>
            {'De: '}
          </span>
          <input
            ref={startDateRef}
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            style={{ border: 'none', width: '40%', fontSize: '10px' }}
          />
        </>
      )}
      {showEndDate && (
        <>
          <span onClick={() => endDateRef.current.click()} style={{ cursor: 'pointer', fontSize: '10px' }}>
          &nbsp;{'á'}&nbsp;
          </span>
          <input
            ref={endDateRef}
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            style={{ border: 'none', width: '40%', fontSize: '10px' }}
          />
        </>
      )}
    </div>
  );
};

export default DateRangePicker;
