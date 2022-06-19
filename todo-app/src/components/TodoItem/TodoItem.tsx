import { addListener } from 'process';
import { useEffect } from 'react';
import {ITodo} from '../../types/data';
import st from './TodoItem.module.css';

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    addToFavorites: (id:number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, favorite, toggleTodo, removeTodo, addToFavorites} = props;
    

    useEffect(() => {
        if (complete) {

        }
    }, [])


    return <div className={st.wrapper}>
        <div className={st.data}>
            <label className={st.comlabel}>
                <input className={st.cominput} type='checkbox' checked={complete} onChange={() => toggleTodo(id)}/>
                <span className={st.comspan}></span>
            </label>
            <label className={st.favlabel}>
                <input className={st.favinput} type='checkbox' checked={favorite} onChange={() => addToFavorites(id)}/>
                <span className={st.favspan}></span>
            </label>
            <div className={st.title}>{title}</div>
        </div>
        <button className={st.remove} onClick={() => removeTodo(id)}></button>
    </div>
}

export {TodoItem}