import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {
    const task1 = [
        {id:1, title: 'html', isDone: true},
        {id:2, title: 'js', isDone: true},
        {id:3, title: 'react', isDone: false},
        {id:4, title: 'r', isDone: false}
    ]
    const task2 = [
        {id:1, title: 'css', isDone: true},
        {id:2, title: 'angular', isDone: false},
        {id:3, title: 'vue', isDone: false}
    ]
    return (
        <div className="App">
            <Todolist title={'What1'} body={123} tasks={task1}/>
            <Todolist title={'What2'} tasks={task2}/>
        </div>
    );
}

export default App;
