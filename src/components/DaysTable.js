import React from "react";

const DaysTable = ({ month, year }) => {

  // 🔹 Leap year check
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  // 🔹 Days in month
  const getDaysInMonth = (month, year) => {
    const daysArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // February + leap year
    if (month === 1 && isLeapYear(year)) {
      return 29;
    }

    return daysArray[month];
  };

  const totalDays = getDaysInMonth(month, year);

  // 🔹 Create days array
  const days = [];
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  return (
    <table id="days-table" border="1">
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          {days.map((day) => (
            <td key={day} id={`day-${day}`}>
              {day}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default DaysTable;
