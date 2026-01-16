import React, { useState } from "react";
import MonthSelector from "./MonthSelector";
import YearDisplay from "./YearDisplay";
import NavigationButtons from "./NavigationButtons";
import DaysTable from "./DaysTable";

const Calendar = () => {

  
  // 🔹 STATES (ONLY HERE)
  const [month, setMonth] = useState(new Date().getMonth()); // 0–11
  const [year, setYear] = useState(new Date().getFullYear());
  const [isEditingYear, setIsEditingYear] = useState(false);

  // 🔹 Month change logic (Dropdown)
  const handleMonthChange = (e) => {
    setMonth(Number(e.target.value));
  };

  // 🔹 Previous Month
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  // 🔹 Next Month
  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // 🔹 Previous Year
  const prevYear = () => {
    setYear(year - 1);
  };

  // 🔹 Next Year
  const nextYear = () => {
    setYear(year + 1);
  };

  // 🔹 Year double-click → edit enable
  const handleYearDoubleClick = () => {
    setIsEditingYear(true);
  };

  // 🔹 Year input change
  const handleYearChange = (e) => {
    setYear(Number(e.target.value));
  };

  // 🔹 Year save (blur / enter)
  const handleYearBlur = () => {
    setIsEditingYear(false);
  };

  return (
    <div id="calendar-container">

      <h2 id="calendar-heading">Calendar</h2>

      {/* Month Dropdown */}
      <MonthSelector
        month={month}
        onMonthChange={handleMonthChange}
      />

      {/* Year Display */}
      <YearDisplay
        year={year}
        isEditingYear={isEditingYear}
        onDoubleClick={handleYearDoubleClick}
        onYearChange={handleYearChange}
        onBlur={handleYearBlur}
      />

      {/* Navigation Buttons */}
      <NavigationButtons
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        prevYear={prevYear}
        nextYear={nextYear}
      />

      {/* Days Table */}
      <DaysTable
        month={month}
        year={year}
      />

    </div>
  );
};

export default Calendar;
