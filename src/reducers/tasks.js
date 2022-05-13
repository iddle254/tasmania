// tasks Reducer

const tasksReducerDefaultState = [];

export default (state = tasksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'REMOVE_TASK':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TASK':
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            ...action.updates,
          };
        } else {
          return task;
        }
      });
    case 'SET_TASKS':
      return action.tasks;
    default:
      return state;
  }
};
