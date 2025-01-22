export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {  //Esta función crea un componente que se llama TodoItem
    return (  //Esto es lo que se va a mostrar en la página
        <li>
            <label>
                <input
                    type="checkbox"  //Esto crea un input de tipo checkbox
                    checked={completed}  //Esto establece el estado del checkbox
                    onChange={e => toggleTodo(id, e.target.checked)}  //Esto actualiza el estado del checkbox
                />
                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}  //Esto ejecuta la función deleteTodo
                className="btn btn-danger"
            >
                Delete
            </button>
        </li>
    )
}