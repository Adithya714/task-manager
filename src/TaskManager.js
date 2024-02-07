import React, { useState } from 'react';
import './YourCustomStyles.css'; // Include your custom styles

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('To Do');
  const [assignees, setAssignees] = useState([]);
  const [activePage, setActivePage] = useState('Projects');
  const [likedTasks, setLikedTasks] = useState([]);

  const handleAddTask = () => {
    if (newTask.trim() !== '' && startDate && endDate) {
      const newTaskObject = {
        task: newTask,
        startDate,
        endDate,
        priority,
        status,
        assignees,
        liked: false,
      };

      setTasks([...tasks, newTaskObject]);
      setNewTask('');
      setStartDate('');
      setEndDate('');
      setPriority('Low');
      setStatus('To Do');
      setAssignees([]);
    }
  };

  const handleLikeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].liked = !updatedTasks[index].liked;

    if (updatedTasks[index].liked) {
      setLikedTasks([...likedTasks, updatedTasks[index]]);
    } else {
      const updatedLikedTasks = likedTasks.filter(
        (task) => task !== updatedTasks[index]
      );
      setLikedTasks(updatedLikedTasks);
    }

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    const updatedLikedTasks = likedTasks.filter(
      (task) => task !== updatedTasks[index]
    );
    updatedTasks.splice(index, 1);

    setTasks(updatedTasks);
    setLikedTasks(updatedLikedTasks);
  };

  return (
    <div className="task-manager-container">
      <div className="dashboard-container">
        <div className="dashboard-heading">
          <i className="fas fa-bars"></i> Task Manager
        </div>
        <div className="dashboard-links">
          <div
            className={`dashboard-link ${
              activePage === 'Projects' ? 'active' : ''
            }`}
            onClick={() => setActivePage('Projects')}
          >
            <i className="fas fa-tasks"></i> Projects
          </div>
          <div
            className={`dashboard-link ${
              activePage === 'Calendar' ? 'active' : ''
            }`}
            onClick={() => setActivePage('Calendar')}
          >
            <i className="far fa-calendar-alt"></i> Calendar
          </div>
          <div
            className={`dashboard-link ${
              activePage === 'Team' ? 'active' : ''
            }`}
            onClick={() => setActivePage('Team')}
          >
            <i className="fas fa-users"></i> Team
          </div>
          <div
            className={`dashboard-link ${
              activePage === 'Favourites' ? 'active' : ''
            }`}
            onClick={() => setActivePage('Favourites')}
          >
            <i className="fas fa-heart"></i> Favourites
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="task-form">
          <input
            className="input"
            type="text"
            placeholder="Add a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            className="input"
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            className="input"
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <select
            className="input"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            className="input"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <input
            className="input"
            type="text"
            placeholder="Assignees (comma separated)"
            value={assignees.join(',')}
            onChange={(e) => setAssignees(e.target.value.split(','))}
          />
          <button onClick={handleAddTask} className="btn add-btn">
            Add
          </button>
        </div>
        <ul className="task-list">
        {(activePage !== 'Favourites' ? tasks : likedTasks).map(
            (task, index) => (
              <li key={index} className="task-item">
                {/* Render tasks or liked tasks based on the active page */}
                <div>{task.task}</div>
                <div>{task.startDate}</div>
                <div>{task.endDate}</div>
                <div>{task.priority}</div>
                <div>{task.status}</div>
                <div>{task.assignees.join(',')}</div>
                <button
                  onClick={() => handleLikeTask(index)}
                  className={`like-btn ${task.liked ? 'liked' : ''}`}
                >
                  Like
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
