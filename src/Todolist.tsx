import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')
    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        //если нажал Enter, то запускай addTaskHandler()
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }
    const allChangeFilterHandler = () => {
        props.changeFilter('all')
    }
    const activeChangeFilterHandler = () => {
        props.changeFilter('active')
    }
    const tsarFooHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
            {/*<button onClick={(event)=>{props.addTask(title)}}>+</button>*/}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {
                                props.removeTask(t.id)
                            }}>x
                            </button>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <button onClick={() => tsarFooHandler('all')}>All</button>
            <button onClick={() => tsarFooHandler('active')}>Active</button>
            <button onClick={() => tsarFooHandler('completed')}>Completed</button>
//старый кодl
            {/*<button onClick={allChangeFilterHandler}>All</button>*/}
            {/*<button onClick={activeChangeFilterHandler}>Active</button>*/}
            {/*<button onClick={ () => { props.changeFilter("completed") } }>Completed</button>*/}

            {/*<button onClick={ () => { props.changeFilter("all") } }>All</button>*/}
            {/*<button onClick={ () => { props.changeFilter("active") } }>Active</button>*/}
            {/*<button onClick={ () => { props.changeFilter("completed") } }>Completed</button>*/}
        </div>
    </div>
}