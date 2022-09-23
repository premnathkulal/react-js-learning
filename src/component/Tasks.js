import Task from "./Task";

const Tasks = ({tasks, onDeleteTask, onToggleReminder}) => {
  return (
    <>
      {tasks.length>0?tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onToggleReminder={onToggleReminder}/>
      )): "No Task Found"}
    </>
  );
};

export default Tasks;
