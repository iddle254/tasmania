import moment from 'moment';

// Get visible expenses

export default (tasks, { text, sortBy, startDate, endDate }) => {
  return tasks
    .filter((task) => {
      const DeadlineMoment = moment(task.deadline);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(DeadlineMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(DeadlineMoment, 'day')
        : true;
      const textMatch = task.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.deadline < b.deadline ? 1 : -1;
      } else if (sortBy === 'days_to_complete') {
        return a.days_to_complete < b.days_to_complete ? 1 : -1;
      }
    });
};
