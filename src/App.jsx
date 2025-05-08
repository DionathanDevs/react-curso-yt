import { useEffect, useState } from "react";
import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  // Carregar tarefas do localStorage no cliente
  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Erro ao carregar tasks do localStorage", error);
    }
  }, []);

  // Salvar no localStorage sempre que tasks mudar
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Erro ao salvar tasks no localStorage", error);
    }
  }, [tasks]);

  /*
  // Código comentado: pegar dados da API
  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

        if (!response.ok) {
          throw new Error(`Erro ao buscar API: ${response.status}`);
        }

        const text = await response.text();
        const data = text ? JSON.parse(text) : [];

        setTasks(data);
      } catch (error) {
        console.error("Erro ao buscar tasks da API", error);
      }
    }

    fetchTasks();
  }, []);
  */

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;