import { TodoItem } from "../TodoItem/TodoItem";
import {ITodo} from '../../types/data';


interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    addToFavorites: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {

    const {items, toggleTodo, removeTodo, addToFavorites} = props;

    return <div>
        {
            props.items.map(todo => (
                <TodoItem 
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    addToFavorites={addToFavorites}
                    {...todo} />
            ))
        }
    </div>
}

export {TodoList}