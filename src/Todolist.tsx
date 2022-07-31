import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (taskID: number) => void
    //filterTasks: (button: string) => void
}

export function Todolist(props: PropsType) {
    const [filter, setFilter] = useState('All')
    let filteredTasks = props.tasks
    if (filter === 'Active') {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }
    if (filter === 'Completed') {
        filteredTasks = props.tasks.filter(el => el.isDone)
    }
    const filterTasks = (button: string) => {
        setFilter(button)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredTasks.map((el) => {
                return (
                    <li key={el.id}>
                        <button onClick={() => {
                            props.removeTasks(el.id)
                        }}>Delete
                        </button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
            {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
        </ul>
        <div>
            <button onClick={() => {
                filterTasks('All')
            }}>All
            </button>
            <button onClick={() => {
                filterTasks('Active')
            }}>Active
            </button>
            <button onClick={() => {
                filterTasks('Completed')
            }}>Completed
            </button>
        </div>
    </div>
}
