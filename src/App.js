import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [currentDate, onChange] = useState(new Date());
  
  //onChange = () => 

  let lastMonth = new Date(currentDate);
  lastMonth.setMonth(currentDate.getMonth() - 1);

  let nextMonth = new Date(currentDate); 
  nextMonth.setMonth(currentDate.getMonth() + 1);
  
  let nextYear = new Date(currentDate); 
  nextYear.setYear(currentDate.getFullYear() + 1);
  nextYear.setDate(currentDate.getDate() - 1);
 
  return (
    <div className="App">
      <header className="App-header">
        <div className="Calendar-Container">
          <Calendar 
            onChange={onChange} 
            value={currentDate} 
            calendarType={'US'} 
            minDetail={'year'}
            minDate={new Date()}
            maxDate={nextYear}
            showNeighboringMonth={false}
            next2Label={false}
            prev2Label={false}
          />
          
        </div>
      </header>
    </div>
  );

  return (
    <div>This is a React component inside of Webflow!</div>
 )
}

export default App;
