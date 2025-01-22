import { useState } from "react"    //Importa el hook useState de la librería react

export function NewTodoForm({ onSubmit }) {     //Esta función crea un componente que se llama NewTodoForm
    const [newItem, setNewItem] = useState("")      //Esto es un hook que crea un estado local

    function handleSubmit(e) {  //Esta función se ejecuta cuando se envía el formulario
        e.preventDefault()
        if (newItem === "") return  //Esto evita que se agreguen elementos vacíos

        onSubmit(newItem)

        setNewItem("")  //Esto borra el prompt cada vez que se agrega un nuevo item
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem}  //Esto establece el valor del input como el estado local
                    onChange={e => setNewItem(e.target.value)}  //Esto actualiza el estado local cada vez que se escribe algo en el input
                    type="text"  //Esto crea un input de tipo texto
                    id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}