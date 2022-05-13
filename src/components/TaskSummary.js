import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectTasks from '../selectors/tasks';
import selectTasksTotal from '../selectors/tasks-total';

export const TaskSummary = ({ taskCount }) => {
  const taskWord = taskCount === 1 ? 'task' : 'tasks';
  // const formattedExpensesTotal = numeral(tasksTotal / 100).format('$0,0.00');

  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span> {taskCount} </span> {taskWord}
        </h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>
            Add task
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleTasks = selectTasks(state.tasks, state.filters);

  return {
    taskCount: visibleTasks.length,
    tasksTotal: selectTasksTotal(visibleTasks),
  };
};

export default connect(mapStateToProps)(TaskSummary);
