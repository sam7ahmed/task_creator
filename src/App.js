import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks,setTasks] = useState([
    {
        id : 1,
        text : "Doctors Appointment",
        day : "feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id : 2,
        text : "Meeting at School",
        day : "feb 6th at 1:30pm",
        reminder: true,
    },
    {
        id : 3,
        text : "Food Shopping",
        day : "feb 5th at 2:30pm",
        reminder: false,
    }
])


  // add task on save
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000)+1 // this lineof code is to creating arandom id coz of we r not dealing with the backend.
    const newTask = {id , ...task}
    setTasks([...tasks, newTask])
  }

  // delete or add can only be done from app.js 
  // deleting a task
    const deleteTask = (id) => {
      console.log('delete',id)  //this is just to show on console/inspect in the browser 
      setTasks(tasks.filter((task) => task.id !== id)) //when tasks filtered then show task = task.id whose id !== the id we delete. 

    }

    //Toggle Reminder
    const toggleReminder =(id) =>{
      // console.log(id)
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }


  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && < AddTask onAdd= {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder}/> : 'No Tasks for You'}
      
    </div>
  );
}

export default App;
