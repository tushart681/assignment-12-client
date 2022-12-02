import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import AdProduct from '../seller/AdProduct';

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(new window.Date())
  return (
    <header>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
      <div>
        <AdProduct selectedDate={selectedDate}></AdProduct>
      </div>
    </header>
  );
};

export default Date;