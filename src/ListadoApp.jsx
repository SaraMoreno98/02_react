const Item = ({nombre, visto}) => {
  return (
    <>
      <li>
        {nombre}
        { visto ? '✔️': '❌'}
      </li>

      {/* OTRA MANERA DE MOSTRARLO */}
      {/* <li>
        {nombre}
        { visto && '✔️'}
      </li> */}
    </>
  )
}

export const ListadoApp = () => {
  return (
    <>
      <h1>Listado de tareas</h1>
      <ol>
        <Item nombre="HTML" visto={true}/>
        <Item nombre="CSS" visto={true}/>
        <Item nombre="BootStrap" visto={true}/>
        <Item nombre="JavaScript" visto={true}/>
        <Item nombre="GIT" visto={true}/>
        <Item nombre="PHP" visto={true}/>
        <Item nombre="SQL" visto={true}/>
        <Item nombre="REACT" visto={false}/>
        <Item nombre="TypeScript" visto={false}/>
        <Item nombre="Angular" visto={false}/>
      </ol>
    </>
  )
}

// CTRL + ALT + FLECHILLA ARRIBA/ABAJO -> Seleccionamos lineas para escribir en todas a la vez
// ALT + SHIFT + I -> Selleccionamos líneas y escribimos en todas a la vez desde el final