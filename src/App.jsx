import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

function App() { 
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App
