import { Header } from './components/Header.tsx';
import { Tasks } from './components/Tasks.tsx'; 

import './app.css'
import { AddTask } from './components/AddTask.tsx';

export function App() {
  return (
      <div className='toDoListMain'>
         <Header/>
         <Tasks/>
      </div>
  )
}