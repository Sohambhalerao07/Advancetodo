import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddList = ({ newTask, setNewTask, handleAddTask }) => {
  return (
    <div className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
    onClick={handleAddTask}>
      <FaPlus className="mr-3" /> Add list
      
      
    </div>
  );
};

export default AddList;
