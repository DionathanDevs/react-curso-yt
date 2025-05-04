import AddTask from "./components/AddTasks"
import Tasks from "./components/Tasks"


function App(){



  return(
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  )

}

export default App