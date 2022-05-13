import React from 'react';
import TaskList from './TaskList';
import TaskListFilters from './TaskListFilters';

const TaskDashboardPage = () => (
  <div>
    <TaskListFilters />
    <TaskList />
  </div>
);
export default TaskDashboardPage;
