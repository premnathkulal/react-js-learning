import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDeleteTask, onToggleReminder }) => {
  return (
    <div className={`task ${task.reminder?'reminder': ''}`} onDoubleClick={() => onToggleReminder(task.id)}>
      <div className="task-name">
        {task.text}
        <FaTimes
          style={{ color: "red", float: "right" }}
          onClick={() => onDeleteTask(task.id)}
        />
      </div>
      <div className="task-day">{task.day}</div>
    </div>
  );
};

export default Task;
