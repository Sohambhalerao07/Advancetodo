import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa'
import alltask from '../assets/alltask.png';

const AllTasks = ({ tasks }) => {
  return (
    <div
      className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
      onClick={() => console.log("Display all tasks:", tasks)}
    >
      <img src={alltask} className="mr-3" /> All Tasks
    </div>
  );
};

export default AllTasks;
