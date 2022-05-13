import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const TaskListItem = ({ id, description, days_to_complete, deadline }) => (
  <Link className='list-item' to={`/edit/${id}`}>
    <div>
      <h3 className='list_item__title'>{description}</h3>
      <span className='list_item__sub-title'>
        {moment(deadline).format('MMMM Do, YYYY')}
      </span>
    </div>
    {/* <h3 className="list_item__data">{numeral(amount / 100).format('$0,0.00')}</h3> */}
    <h3 className='list_item__data'>{days_to_complete}</h3>
  </Link>
);

export default TaskListItem;
