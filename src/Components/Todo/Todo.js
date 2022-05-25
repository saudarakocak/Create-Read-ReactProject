import './Todo.css'
import {useState} from "react"
import TodoList from '../Todo-List/TodoList';
import TodoCreate from '../Todo-Create/TodoCreate';

const Todo = () => {

    const [getDataTodo, setDataTodo] = useState([
        { id : 1, title : 'Abili'},
        { id : 2, title : 'Pem Pem '},
        { id : 3, title : 'Abu Gaming'}
    ])

    const eventCreateTodo = (todo) =>{
        setDataTodo(getDataTodo.concat(todo))
        console.log(getDataTodo)
    }

    return (
        <div>
            <h3>Todo List</h3>

            <TodoCreate onCreateTodo = {eventCreateTodo}/>

            <TodoList dataToDoValue = {getDataTodo}/>
        </div>
    )
}

export default Todo;