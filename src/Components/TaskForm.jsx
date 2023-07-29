import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
    //Constante que almacena y actualixa lo que escribe el usuario en el input
    const [title, setTitle] = useState("");
    const [descripcion, setDescripcion] = useState("");
    //De todo el objeto solo me traigo el createTask
    const { createTask } = useContext(TaskContext)


    const handleSubmit = (e) => {
      e.preventDefault();
      //Objeto que puedo añadir al arreglo
      createTask({
        title,
        descripcion
      })
      setTitle(' ')
      setDescripcion(' ');
    } 

  return (
    <div className="max-w-md mx-auto rounded-md">
      {/* //Al enviar el form llamo a la función 'handleSubmit' */}
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        />

        <textarea
          name=""
          id=""
          cols="15"
          rows="5"
          placeholder="Descripción de tarea"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        />

        <button className="bg-indigo-500 px-3 py-1 rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm
