import { TodoItem } from "./TodoItem";  //Importa el componente TodoItem

export function TodoList({ todos, toggleTodo, deleteTodo }) {  //Esta función crea un componente que se llama TodoList
    return (
        <ul className="list">
            {todos.length === 0 && "No To Dos"}
            {todos.map(todo => {  //Esto mapea los elementos de la lista
                return (
                    <TodoItem  //Esto crea un componente TodoItem
                        {...todo}  //Esto pasa las propiedades del item
                        key={todo.id}  //Esto establece la key del item
                        toggleTodo={toggleTodo}  //Esto pasa la función toggleTodo
                        deleteTodo={deleteTodo}  //Esto pasa la función deleteTodo

                    />
                )
            })}
        </ul>
    )
}