import React from "react";

const NavigationButtons = ({
  prevMonth,
  nextMonth,
  prevYear,
  nextYear
}) => {
  return (
    <div id="navigation-buttons-container">

      {/* Month Navigation */}
      <button
        id="prev-month-btn"
        onClick={prevMonth}
      >
        ◀ Month
      </button>

      <button
        id="next-month-btn"
        onClick={nextMonth}
      >
        Month ▶
      </button>

      {/* Year Navigation */}
      <button
        id="prev-year-btn"
        onClick={prevYear}
      >
        ◀ Year
      </button>

      <button
        id="next-year-btn"
        onClick={nextYear}
      >
        Year ▶
      </button>

    </div>
  );
};

export default NavigationButtons;
