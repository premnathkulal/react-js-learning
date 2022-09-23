import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      setErrorMessage("Please enter tak");
      return;
    }
    onAddTask({ text: task, day, reminder });
    setErrorMessage("");
    setTask("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {errorMessage && <span className="error-message">{errorMessage}</span>}
      </div>
      <div className="form-control">
        <label>Task Time</label>
        <input
          type="text"
          placeholder="Task Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-checkbox">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-full" />
    </form>
  );
};

export default AddTask;
