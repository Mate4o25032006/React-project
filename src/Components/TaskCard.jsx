//Importo función de contexto
import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)
  /*Lo que hago es decir que desde 'TaskCard' tengo acceso a un valor que está dentro del contexto
  const valor = useContext(TaskContext)
  console.log(valor);*/
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.tittle}</h1>

      <p className="text-gray-500 text-sm">{task.descripcion}</p>

      <button className="bg-red-500 px-2 py-1 rounded-md mt-4  hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard
