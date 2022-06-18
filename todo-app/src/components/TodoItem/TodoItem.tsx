import { useContext } from 'react';
import { TodoContext } from '../../context';
import {ITodo} from '../../types/data';
import st from './TodoItem.module.css';

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    addToFavorites: (id:number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, favorite, toggleTodo, removeTodo, addToFavorites} = props;
    const {isFav, setIsFav} = useContext(TodoContext);



    return <div className={st.wrapper}>
        <div className={st.data}>
            <input className={st.complete}
                type='checkbox' 
                checked={complete} 
                onChange={() => toggleTodo(id)} />
            <div className={st.title}>{title}</div>
        </div>
        <button className={st.remove} onClick={() => removeTodo(id)}></button>
    </div>
}

export {TodoItem}