import React from 'react';
import { FaUser } from 'react-icons/fa';

const AssignedTasks = ({ tasks }) => {
  return (
    <button
      className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
      onClick={() => console.log("Display tasks assigned to me:", tasks.filter(task => task.assignedToMe))}
    >
      <FaUser className="mr-3" /> Assigned to me
    </button>
  );
};

export default AssignedTasks;
