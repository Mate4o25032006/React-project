//*A través de context puedo acceder a los valores que están dentro de otros componentes
import { createContext, useState, useEffect } from "react"
import { tasks as data } from '../data/tasks';

//Nombre del contexto
export const TaskContext = createContext()

//Componente que engloba todo
export function TaskContextProvider(props) {
  //Creo estado para las tareas, como decir  'tasks = []
   const [tasks, setTasks] = useState([]);

  function createTask(task) {
    //Copio todo los elementos del arreglo de tareas y le añado una tarea nueva, que es la del argumento de la función (taskTitle)
    setTasks([
      ...tasks,
      {
        tittle: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  }

  function deleteTask(taskId){
    //Actualixo el estado con el nuevo arreglo después de eliminar la tarea por medio de su id
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    //Actualixo estado con la información que reciba desde el arreglo de objetos
    setTasks(data);
  }, [])

  return (
    //Creo componente
    <TaskContext.Provider value={{
      tasks ,
      createTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext
