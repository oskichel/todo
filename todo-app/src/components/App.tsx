import { Todo } from "./Todo"
import { TodoContextProvider } from "../context";

const App: React.FC = () => {
    
    
    return <div>
        <TodoContextProvider>
            <Todo />
        </TodoContextProvider>
    </div>
}

export {App}