import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa'
import todaytask from '../assets/calendar.svg';

const TodayTasks = ({ tasks }) => {
  return (
    <div
      className="flex items-center p-3 text-gray-600 hover:bg-grey-100 rounded-lg cursor-pointer"
      onClick={() => console.log("Display today's tasks:", tasks.filter(task => task.planned))}
    >
      <img src={todaytask} className="mr-3" /> Today
    </div>
  );
};

export default TodayTasks;
