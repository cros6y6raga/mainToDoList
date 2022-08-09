import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import Styles from './Todolist.module.css'
import {CheckBox} from './components/CheckBox';

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
    addTask: (title: string) => void
    changeIsDone: (taskId: string, isDoneValue: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState('')
    const [error, setError] = useState<null | string>(null)
    const [filterValue, setFilterValue] = useState('all')
    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim());
            setTitle('');
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter('all')
    };
    const onActiveClickHandler = () => {
        props.changeFilter('active')
    };
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    };
    const changeIsDoneHandler = (taskID:string, isDone:boolean) => {
        props.changeIsDone(taskID, isDone)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? Styles.error : ''}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        {error && <div className={Styles.errorMessage}>{error}</div>}
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id} className={t.isDone ? Styles.isDone : ''}>
                        <CheckBox isDone={t.isDone} callBack={(isDone)=>changeIsDoneHandler(t.id,isDone)}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? Styles.activeFilter : ''} onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? Styles.activeFilter : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? Styles.activeFilter : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}