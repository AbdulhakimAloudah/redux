const initialState = {
  allTasks: null,
  taskId: "",
};
const Tasks = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET":
      const { theTasks } = payload;
      return { theTasks };

    case "DELETE":
      const { taskId } = payload;
      return { taskId };

    case "UPDATE":
      return ; 

    case "CREATE":
      return ; 

    default:
      return state;
  }
};

export default Tasks;

export const taskss = (data) => {
  return {
    type: "GET",
    payload: data,
  };
};

export const deletee = (data) => {
  return {
    type: "DELETE",
    payload: data,
  };
};
