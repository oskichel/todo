import { useEffect, useState, useRef } from "react";
import {ITodo} from '../types/data';
import {TodoList} from './TodoList/TodoList';
import st from './App.module.css';
import { useContext } from "react";
import { TodoContext } from "../context";

const Todo: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);
    const {isFav, setIsFav} = useContext(TodoContext);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement>  = (e) => {
        if (e.key === 'Enter') addTodo();
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
                favorite: false,
            }])
            setValue('')
        }
    }

    const removeTodo = (id:number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const addToFavorites = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) {
                return todo;
            }
            return {
                ...todo,
                favorite: !todo.favorite,
            }
        }, setIsFav(true)
        ))
        
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        
    }, []);


    
    return <div className={st.wrapper}>
        <h1 className={st.h1}>TODO LIST</h1>
        <div className={st.add}>
            <input className={st.input} value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
            <button className={st.button} onClick={addTodo}>Add</button>
        </div>
        <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} addToFavorites={addToFavorites} />
    </div>
}

export {Todo}