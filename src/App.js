import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import About from "./component/About";
import Home from "./component/Home";
import { useEffect, useState } from "react";
import AddTask from "./component/AddTask";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, reminder: data.reminder } : item
      )
    );
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { ...task, id };
    // setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="App">
        <Header
          onToggleAddForm={() => setShowAddForm(!showAddForm)}
          isShowAddForm={showAddForm}
        />
        {showAddForm && <AddTask onAddTask={addTask} />}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                onDeleteTask={deleteTask}
                onToggleReminder={toggleReminder}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
