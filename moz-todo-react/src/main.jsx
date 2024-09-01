import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  {id: "todo-0", name: "eat", completed:true},
  {id: "todo-0", name: "eat", completed:true},
  {id: "todo-0", name: "eat", completed:true},

];
  
console.log(tasks);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA}/>
  </StrictMode>,
)

