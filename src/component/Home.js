import Tasks from "./Tasks";
import { useEffect, useState } from "react";

function Home({tasks, onDeleteTask, onToggleReminder}) {
  return (
    <div className="Home">
      <Tasks
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onToggleReminder={onToggleReminder}
      />
    </div>
  );
}

export default Home;
