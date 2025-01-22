import { useEffect, useState } from "react";  //Importa los hooks useEffect y useState de la librería react
import { NewTodoForm } from './NewTodoForm';  //Importa el componente NewTodoForm
import { TodoList } from './TodoList';  //Importa el componente TodoList
import "./styles.css";  //Importa el archivo de estilos

export default function App() {  //Esta función crea un componente que se llama App
  const [todos, setTodos] = useState(() => {  //Esto crea un estado local
    const localValue = localStorage.getItem("ITEMS")  //Esto obtiene el valor del localStorage
    if (localValue == null) return []  //Esto devuelve un array vacío si no hay elementos en el localStorage

    return JSON.parse(localValue)  //Esto convierte el valor del localStorage en un array
  })

  useEffect(() => {  //Este hook se ejecuta cada vez que el estado local cambia
    localStorage.setItem("ITEMS", JSON.stringify(todos))  //Esto guarda el estado local en el localStorage
  }, [todos])  //Esto establece la dependencia del hook

  function addTodo(title) {  //Esta función se ejecuta cuando se agrega un nuevo item
    setTodos((currentTodos) => {  //Esto actualiza el estado local
      return [  //Esto devuelve un nuevo array con los elementos anteriores y el nuevo item
        ...currentTodos,  //Esto copia los elementos anteriores
        {
          id: crypto.randomUUID(),  //Esto genera un id único
          title,  //Esto establece el título del item
          completed: false  //Esto establece el estado del item
        },
      ]
    })
  }

  function toggleTodo(id, completed) {  //Esta función se ejecuta cuando se cambia el estado del checkbox
    setTodos((currentTodos) => {  //Esto actualiza el estado local
      return currentTodos.map(todo => { //Esto mapea los elementos de la lista
        if (todo.id === id) { //Esto busca el item que se quiere actualizar
          return {  //Esto devuelve un nuevo item con el estado actualizado
            ...todo,  //Esto copia el item anterior
            completed //Esto actualiza el estado del item
          }
        }
        return todo //Esto devuelve el item sin cambios
      })
    })
  }

  function deleteTodo(id) { //Esta función se ejecuta cuando se elimina un item
    setTodos((currentTodos) => {  //Esto actualiza el estado local
      return currentTodos.filter(todo => todo.id !== id)  //Esto devuelve un nuevo array sin el item eliminado
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}