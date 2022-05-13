import React from 'react';
import TaskList from './TaskList';
import TaskListFilters from './TaskListFilters';
import TaskSummary from './TaskSummary';

const TaskDashboardPage = () => (
  <div>
    <TaskSummary />
    <TaskListFilters />
    <TaskList />
  </div>
);

export default TaskDashboardPage;
