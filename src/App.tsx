import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const [tasks1, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ])


    const removeTasks = (taskID: number) => {
        setTasks(tasks1.filter((el) => el.id !== taskID))
    }
    // const [filter, setFilter] = useState('All')
    // let filteredTasks = tasks1
    // if (filter === 'Active') {
    //     filteredTasks = tasks1.filter(el => !el.isDone)
    // }
    // if (filter === 'Completed') {
    //     filteredTasks = tasks1.filter(el => el.isDone)
    // }
    // const filterTasks = (button: string) => {
    //     setFilter(button)
    // }
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1} removeTasks={removeTasks} //filterTasks={filterTasks}
            />
        </div>
    );
}
//
export default App;
