import React from 'react';
import { FaStar } from 'react-icons/fa';

const ImportantTasks = ({ tasks }) => {
  return (
    <div
      className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
      onClick={() => console.log("Display important tasks:", tasks.filter(task => task.important))}
    >
      <FaStar className="mr-3" /> Important
    </div>
  );
};

export default ImportantTasks;
