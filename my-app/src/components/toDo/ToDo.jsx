import React from 'react';
import './index.css';

const todoList = [
    {id: 0, task: 'Выучить Реакт', isDone: false},
    {id: 1, task: 'Повторить JS', isDone: false},
    {id: 2, task: 'Повторить HTML/CSS', isDone: false},
    {id: 3, task: 'Звкончить туду лист', isDone: false},
    {id: 4, task: 'Закончить курс', isDone: false},
    
]

export default class ToDo extends React.Component (
    constructor(props) (
        super(props);
        this.state = {todo: todoList};


        
        render() {
            return <div className="todo">List</div>
        }


    )
)