
import React from "react";

const YearDisplay = ({
  year,
  isEditingYear,
  onDoubleClick,
  onYearChange,
  onBlur
}) => {
  return (
    <div id="year-display-container">

      {/* Year Text */}
      {!isEditingYear && (
        <span
          id="year-text"
          onDoubleClick={onDoubleClick}
        >
          {year}
        </span>
      )}

      {/* Year Input (Edit Mode) */}
      {isEditingYear && (
        <input
          id="year-input"
          type="number"
          value={year}
          onChange={onYearChange}
          onBlur={onBlur}
          autoFocus
        />
      )}

    </div>
  );
};

export default YearDisplay;
