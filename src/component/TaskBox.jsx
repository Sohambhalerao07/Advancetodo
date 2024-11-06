import React, { useState } from 'react';
import { FaStar, FaTrashAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from '../assets/calendar.svg';

function TaskBox({ task, onDateChange, onDelete }) {
  const [isImportant, setIsImportant] = useState(task.important);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(task.date || null);
  const [isChecked, setIsChecked] = useState(false);  // New state for checkbox

  const handleStarClick = () => {
    setIsImportant(!isImportant);
  };

  const handleCalendarClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
    onDateChange(date);
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-white shadow-sm mb-2 relative">
  
      <input 
        type="checkbox" 
        className="mr-4 cursor-pointer h-5 w-5" 
        onClick={handleCheckboxClick} 
      />
  
      <p className={`flex-grow text-gray-700 ${isChecked ? 'line-through text-gray-400' : ''}`}>
        {task.text}
      </p>

      <div onClick={handleStarClick} className="cursor-pointer ml-4">
        {isImportant ? (
          <FaStar className="text-black h-6 w-6" />
        ) : (
          <FaStar className="text-gray-300 h-6 w-6" />
        )}
      </div>

      <div onClick={handleCalendarClick} className="cursor-pointer ml-4">
        <img src={calendarIcon} alt="Calendar Icon" className="h-6 w-6" />
      </div>

      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          className="absolute top-10 right-0 bg-white shadow-md rounded-lg ml-5 z-10"
        />
      )}

     
      <div>
        <div onClick={onDelete} className="ml-3 top-2 right-2 cursor-pointer z-20">
          <FaTrashAlt className="text-grey-300 h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default TaskBox;
