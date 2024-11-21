import { Header } from './components/Header.tsx';
import { AddTask } from './components/AddTask.tsx'; 
import { Tasks } from './components/Tasks.tsx'; 


import './app.css'

export function App() {
  return (
      <div className='toDoListMain'>
         <Header/>
         <AddTask/>
         <Tasks />
      </div>
  )
}