export default (tasks) => {
  return tasks
    .map((task) => task.days_to_complete)
    .reduce((sum, value) => sum + value, 0);
};
