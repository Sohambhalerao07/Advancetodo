import React, { useState } from 'react';
import '../SideBar.css'; // Make sure this is imported
import AllTasks from './AllTasks';
import TodayTasks from './TodayTasks';
import ImportantTasks from './ImportantTasks';
import PlannedTasks from './PlannedTasks';
import AssignedTasks from './AssignedTasks';
import AddList from './AddList';
import profile from '../assets/profile.jpg';

const Sidebar = ({ darkMode }) => {
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const [newTask, setNewTask] = useState(""); // State to hold new task input

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObject = { text: newTask, important: false, planned: false, assignedToMe: false, category: 'Work' };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  return (
    <div className={`sidebar ${darkMode ? 'sidebar-dark' : 'sidebar-light'}`}>
     
      <div className="sidebar-profile">
        <img
          src={profile}
          alt="profile"
          className={`border-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
        />
        <div className="text">Hey, ABCD</div>
      </div>

     
      <div className={`sidebar-tasks ${darkMode ? 'sidebar-tasks-dark' : 'sidebar-tasks-light'}`}>
        <AllTasks tasks={tasks} />
        <TodayTasks tasks={tasks} />
        <ImportantTasks tasks={tasks} />
        <PlannedTasks tasks={tasks} />
        <AssignedTasks tasks={tasks} />
      </div>

      
      <div className={`sidebar-add-task ${darkMode ? 'sidebar-add-task-dark' : 'sidebar-add-task-light'}`}>
        <AddList newTask={newTask} setNewTask={setNewTask} handleAddTask={handleAddTask} />
      </div>
    </div>
  );
};

export default Sidebar;
