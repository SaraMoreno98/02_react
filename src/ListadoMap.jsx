import { useState } from "react"
import { ItemTarea } from "./componentes/ItemTarea"
import { AgregarTarea } from "./componentes/AgregarTarea"

export const ListadoMap = () => {
  let listaTareas = [
    {id: 1, nombre:"HTML", visto:true},
    {id: 2, nombre:"CSS", visto:true},
    {id: 3, nombre:"BootStrap", visto:true},
    {id: 4, nombre:"JavaScript", visto:true},
    {id: 5, nombre:"GIT", visto:true},
    {id: 6, nombre:"PHP", visto:true},
    {id: 7, nombre:"SQL", visto:true},
    {id: 8, nombre:"REACT", visto:false},
    {id: 9, nombre:"TypeScript", visto:false},
    {id: 10, nombre:"Angular", visto:false},
  ]

  // listaTareas es el valor inicial
  // lista es el array que inicialmente toma el valor de listaTareas pero luego se va actualizando con setLista()
  const [lista, setLista] = useState(listaTareas)
  const addRecreo = () => {
    setLista([...lista, {id: lista.length + 1, nombre: "Recreo", visto: true}])
  }

  const onAgregarTarea = (nombreTarea) => {
      let nuevoNombreTarea = nombreTarea.trim()
      // Comprobamos que nombreTarea no está vacío
      if(nuevoNombreTarea < 1) return

      const nuevaTarea = {
          id: lista.length + 1,
          nombre: nuevoNombreTarea,
          visto: false
      }

      setLista([...lista, nuevaTarea])
  }

  return (
    <>
      <h1>Listado de tareas</h1>
      <ol>
        {
          lista.map(tarea =>
            <ItemTarea key={tarea.id} nombre={tarea.nombre} visto={tarea.visto}/>
          )
        }
      </ol>
      <AgregarTarea agregarTarea={onAgregarTarea}/>
      <button onClick={addRecreo}>Agregar Recreo</button>
    </>
  )
}

// CTRL + ALT + FLECHILLA ARRIBA/ABAJO -> Seleccionamos lineas para escribir en todas a la vez
// ALT + SHIFT + I -> Selleccionamos líneas y escribimos en todas a la vez desde el final