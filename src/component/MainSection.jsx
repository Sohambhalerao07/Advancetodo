import React, { useState, useEffect } from 'react';
import calendar from '../assets/calendar.svg';
import bell from '../assets/bell.png';
import refresh from '../assets/refresh.png';
import TaskBox from './TaskBox';
import { useDarkMode } from './DarkModeContext';

function MainSection() {
  const { darkMode } = useDarkMode();
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, date: null }]);
      setNewTask('');
    }
  };

  const handleDateChange = (index, date) => {
    const updatedTasks = tasks.map((task, i) => i === index ? { ...task, date } : task);
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const handleRefresh = () => {
    setNewTask(''); 
  };

  return (
    <div className={`w-[1020px] h-[198px] mr-20 p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-t from-white to-slate-200'}`}>
      <div className={`flex-col items-center border p-4 shadow-sm ${darkMode ? 'bg-gray-700 text-white' : ''}`}>
        <input 
          type="text" 
          placeholder="Add A Task" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className={`flex-grow outline-none ${darkMode ? 'bg-gray-600 text-white placeholder-gray-300' : 'bg-slate-200 text-gray-700 placeholder-gray-400'} px-2`}
        />
        <div className="flex">
          <div className="flex items-center space-x-4 ml-4">
            <img src={bell} alt="Bell Icon" className={`h-6 w-6 cursor-pointer ${darkMode ? 'filter invert' : ''}`} />
            <img src={refresh} alt="Refresh Icon" onClick={handleRefresh}  className={`h-6 w-6 cursor-pointer ${darkMode ? 'filter invert' : ''}`} />
            <img src={calendar} alt="Calendar Icon" className={`h-6 w-6 cursor-pointer ${darkMode ? 'filter invert' : ''}`} />
          </div>
          <button 
            className={`ml-auto px-4 py-2 rounded-lg transition-colors ${darkMode ?  'bg-green-500 text-white' : 'bg-green-700 text-white' }`}
            onClick={handleAddTask}
          >
            ADD TASK
          </button>
        </div>
      </div>
      
      <div className="mt-4">
        {tasks.map((task, index) => (
          <TaskBox 
            key={index} 
            task={task} 
            onDateChange={(date) => handleDateChange(index, date)}
            onDelete={() => handleDeleteTask(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default MainSection;
