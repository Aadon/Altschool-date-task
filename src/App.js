import React, { useState } from "react";

const useDate = () => {
  const date = new Date();

  const getDay = () => {
    return date.getDate();
  };

  const getMonth = () => {
    return date.getMonth();
  };

  const addDay = (numberOfDays) => {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + numberOfDays);

    // Check if the day after adding is greater than the number of days for that month
    if (newDate.getMonth() !== date.getMonth()) {
      // If so, set the date to be the first day of the next month
      newDate.setDate(1);
      newDate.setMonth(newDate.getMonth() + 1);
    }

    return newDate;
  };

  const addMonth = (numberOfMonths) => {
    const newDate = new Date(date.getTime());
    newDate.setMonth(newDate.getMonth() + numberOfMonths);

    // Check if the month after adding is greater than 11
    if (newDate.getMonth() > 11) {
      // If so, set the year to be next year and set the month to be January
      newDate.setFullYear(newDate.getFullYear() + 1);
      newDate.setMonth(0);
    }

    return newDate;
  };

  return { date, getDay, getMonth, addDay, addMonth };
};

export default function App() {
  
const { date, getDay, getMonth, addDay, addMonth } = useDate();
const [daysToAdd, setDaysToAdd] = useState(0);
const [monthsToAdd, setMonthsToAdd] = useState(0);

const handleDaysChange = (e) => {
  setDaysToAdd(Number(e.target.value));
};

const handleMonthsChange = (e) => {
  setMonthsToAdd(Number(e.target.value));
};


const addedDay = addDay(daysToAdd);
const addedMonth = addMonth(monthsToAdd);

return (
  <div>
    Date: {date.toString()}
    <br />
    Day: {getDay()}
    <br />
    Month: {getMonth()}
    <br />

    <label>
      Days to Add:
      <input type="number" value={daysToAdd} onChange={handleDaysChange} />
    </label>

    <br />

    <label>
      Months to Add:
      <input
        type="number"
        value={monthsToAdd}
        onChange={handleMonthsChange}
      />
    </label>

    <br />

    Added Day: {addedDay.toString()}
    <br />
    Added Month: {addedMonth.toString()}
  </div>
);
}