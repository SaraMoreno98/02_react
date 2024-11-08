export const ItemTarea = ({nombre, visto}) => {
    return (
      <>
        <li className="fondo_rojo">
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