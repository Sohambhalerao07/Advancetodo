import React from 'react';
import { FaMap } from 'react-icons/fa'
import plan from '../assets/carbon_plan.png';

const PlannedTasks = ({ tasks }) => {
  return (
    <div
      className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
      onClick={() => console.log("Display planned tasks:", tasks.filter(task => task.planned))}
    >
      <img src={plan} className="mr-3" /> Planned
    </div>
  );
};

export default PlannedTasks;
